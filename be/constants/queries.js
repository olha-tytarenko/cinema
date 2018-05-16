exports.SELECT_ALL = table => `SELECT * FROM ${table}`;
exports.INSERT = table => `INSERT INTO ${table} SET ?`;
exports.UPDATE = table => `UPDATE ${table} SET `;
exports.SELECT_BY_ID = table => `SELECT * from ${table} WHERE id_${table} = ?`;
