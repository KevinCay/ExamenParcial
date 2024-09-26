module.exports = (sequelize, Sequelize) => {
    const Proyecto = sequelize.define("proyectos", {
        id_proyecto: {
            type: Sequelize.INTEGER, 
            allowNull: false 
        },
        id_usuario: {
            type: Sequelize.INTEGER, 
            allowNull: false 
        },
        nombre: {
            type: Sequelize.STRING(100) 
        },
        descripcion: {
            type: Sequelize.TEXT 
        },
        fecha_creacion: {
            type: Sequelize.DATE
        }
    });
    return Proyecto;
};
