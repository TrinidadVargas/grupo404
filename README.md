# 404

# Entega 2
La aplicación se encuentra en el siguiente link: https://ancient-ocean-79502.herokuapp.com


# Rutas:
## Página principal: https://ancient-ocean-79502.herokuapp.com/users
Se muestran las clases destacadas, con sus respectivos horarios y salas. Si haces click en sala te lleva a cada sala y se muestran las clases que se imparten en esa sala.

## Usuarios
/users - ruta para visualizar todos los usuarios
/users/:id ruta para ver el perfil de cada usuario y sus chats con otros usuarios, hay un enlace para ver la conversación.

El delete y update está creado pero no fue posible subirlo a tiempo, al igual que la eliminación de conversaciones. No se consideró el caso de eliminar ni editar mensajes individuales ni edición de las conversaciones, ya que no tienen sentido (conversation hasMany messages)


## Conversaciones
/conversations/:id ruta para ver una conversación con todos sus mensajes
/conversations/new crea una nueva conversación entre dos usuarios. Actualmente hay que poner el id de los usuarios, pero esto será modificado una vez implementado el sistema de sesión.

## Mensajes
/messages/new ruta para mandar un mensaje a otro usuario. Actualmente hay que poner el id de conversación y del usuario actual. Estos parámetros serán eliminados cuando se implemente el sistema de sesión.

## Salas:
/room - ruta para visualizar todas las salas
/room/:id - ruta para una sala en particular, se puede llegar directo desde la página principal haciendo click en “SALA” abajo de cada clase
/room/new - click en agregar- ruta para crear una nueva sala.


## Máquinas:
/machines - ruta para visualizar todas las máquinas
/machines/:id - click en Ver más - ruta para visualizar una máquina en particular
/machines/new -click en Agregar - ruta para crear una máquina nueva

## Membresías
/memberships - ruta para visualizar todas las membresías
/memberships/:id - click en Ver más - ruta para visualizar una membresía en particular
/memberships/new -click en Agregar - ruta para crear una membresía nueva

## Consideraciones:

Los usuarios se crearon con un atributo tipo que indica que tipo de usuario es. Si es cliente, especialista, o administrador. Para la entrega 3 se mejorará este aspecto.
