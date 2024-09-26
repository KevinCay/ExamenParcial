module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define("usuarios", {
        nombre: {
            type: Sequelize.STRING(100)
        },
        correo: {
            type: Sequelize.STRING(100)
        },
        contrasena: {
            type: Sequelize.STRING(255)
        },
        fecha_creacion: {
            type: Sequelize.DATE
        }
    });
    return Usuario;
};
