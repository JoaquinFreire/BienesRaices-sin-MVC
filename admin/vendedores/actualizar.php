<?php
require '../../includes/app.php';

use App\Vendedor;

estaAutenticado();

// Validar que sea un ID válido

$id = $_GET['id'];
$id = filter_var($id, FILTER_VALIDATE_INT);

if (!$id) {
    header('Location: /JoaquinF/bienesraices/admin');
}

// Obtener el arreglo de vendedor
$vendedor = Vendedor::find($id);

// Arreglo con mensajes de errores
$errores = Vendedor::getErrores();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    // Asignar los valores
    $args = $_POST['vendedor'];

    // Sincronizar objeto en memoria con lo que el usuario escribió
    $vendedor->sincronizar($args);

    // Validación
    $errores = $vendedor->validar();

    if(empty($errores)){
        $vendedor->guardar();
    }
}

incluirTemplate('header');

?>

<main class="contenedor seccion">
    <h1>Actualizar Vendedor(a)</h1>
    <a href="/JoaquinF/bienesraices/admin/" class="boton boton-verde">Volver</a>

    <?php foreach ($errores as $error) : ?>
        <div class="alerta error">
            <?php echo $error; ?>
        </div>
    <?php endforeach; ?>

    <form method="POST" action="" class="formulario">
        <?php include '../../includes/templates/formulario_vendedores.php' ?>

        <input type="submit" value="Actualizar Vendedor(a)" class="boton boton-verde">
    </form>
</main>
<?php
incluirTemplate('footer');
?>