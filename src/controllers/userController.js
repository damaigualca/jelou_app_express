import {poolPromise, sql} from '../config/db.js';

export async function createUser(req, res) {
    const { name, email, password } = req.body;

    if (name === undefined || email === undefined) {
        res.status(400);
        res.send('Name and email are required');
        return;
    }

    try {
        const pool = await poolPromise();

        const result = await pool
            .request()
            .input('name', sql.NVarChar, name)
            .input('email', sql.NVarChar, email)
            .input('password', sql.NVarChar, password)
            .query('INSERT INTO users (name, email, password) VALUES (@name, @email, @password)'
            );

        res.json({
            id: result.insertId,
            name,
            email
        });
        }
    catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

export async function getUsers(req, res) {
    try {
        const pool = await poolPromise();
        const { recordset } = await pool.query`SELECT * FROM users`;
        res.json(recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

}

export async function getUser(req, res) {
    try {
        const { id } = req.params;
        const pool = await poolPromise();
        const { recordset } = await pool.query`SELECT * FROM users WHERE id = ${id}`;
        res.json(recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export async function updateUser(req, res) {
    const { id } = req.params;
    const { name, email, password } = req.body;

    // Opcional: Validación de los datos recibidos
    if (name === undefined || email === undefined) {
        res.status(400);
        res.send('Name and email are required');
        return;
    }

    try {
        const pool = await poolPromise();
        const result = await pool.request()
            .input('id', sql.Int, id)
            .input('name', sql.NVarChar, name)
            .input('email', sql.NVarChar, email)
            .input('password', sql.NVarChar, password) // Considera la seguridad al tratar contraseñas
            .query('UPDATE users SET name = @name, email = @email, password = @password WHERE id = @id');

        if (result.rowsAffected[0] > 0) {
            res.json({ message: 'User updated successfully' });
        } else {
            res.status(404).send('User not found');
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}


export async function deleteUser(req, res) {
    const { id } = req.params;

    try {
        const pool = await poolPromise();
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query('DELETE FROM users WHERE id = @id');

        if (result.rowsAffected[0] > 0) {
            res.json({ message: 'User deleted successfully' });
        } else {
            res.status(404).send('User not found');
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}
