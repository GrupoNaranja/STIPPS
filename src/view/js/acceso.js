<html>
    <head>
     <meta charset="utf-8">
      <h1><i>STIPPS </i></h1>
      <h2><i>Integración Técnica de Profesionales con principio Social</i></h2>
    </head>
    <body>
        <form id="frmPais">
            <div id="divEntradaDato">
                <table id="tblEntradaDato">
                    <tbody id="tbEntradaDato">
                        <tr>
                            <td colspan="2">
                                <h2><i>Modulo de Consulta </i></h2>  
                            </td>
                        </tr>
                                               <tr>
                            <td>
                                ID_AREA
                            </td>
                            <td>
                                <select id="selID_AREA.">
                                    <option>--Seleccionar--</option>
                                    <option id="optID_AREA">Aqui llega los datos de la base de datos</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                               ID_CURSOS.
                            </td>
                            <td>
                                <select id="selID_CURSOS">
                                    <option>--Seleccionar--</option>
                                    <option id="optID_CURSOS">Aqui llega los datos de la base de datos</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <tr>
                                <td>
                                    CORREO USUARIO
                                </td>
                                <td>
                                    <input type="text" value="" id="txtCorreo Usuario" name="txtCorreo usuario">
                                </td>
                            </tr>
                            <td colspan="2">
                                <input type="button" value="Agregar" id="btnAgregar" name="btnAgregar">
                                <input type="button" value="Modificar" id="btnModificar" name="btnModificar">
                                <input type="button" value="Eliminar" id="btnEliminar" name="btnEliminar">
                                <input type="button" value="Consultar" id="btnConsultar" name="btnConsultar">
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <br>
            <div id="divSalidaDato">
                <table id="tblSalidaDato" border="3">
                    <thead id="thSalidaDato">
                        <tr>
                            <td>Id_Profesional Encargado</td>
                            <td>Id_Área </td>
                            <td>Descripció<noscript></noscript></td>
                            <td>Id_Curso</td>
                        </tr>
                    </thead>
                    <tbody id="tbSalidaDato">
                         <!-- aqui se imprime el resultado que llegue de la base de datos    -->
                    </tbody>
                </table>
            </div>
        </form>
    </body>
</html>