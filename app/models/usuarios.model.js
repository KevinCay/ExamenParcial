module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define("usuarios", {
        id_usuario: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: Sequelize.STRING(100)
        },
        correo: {
            type: Sequelize.STRING(100)
        },
        contraseña: {
            type: Sequelize.STRING(255)
        },
        fecha_creacion: {
            type: Sequelize.DATE
        }
    });
    return Usuario;
};

