# 404

# GOGYM
# Entega 4
La aplicación se encuentra en el siguiente link: https://mysterious-meadow-46479.herokuapp.com/

Movimos la aplicación a la raíz de este repositorio, por lo que ahora la rama master está en heroku.

## Home

Página principal donde se pueden visualizar las clases, máquinas, profesores, salas, entrenadores.
Hay dos botones uno para CREAR CUENTA y otro para iniciar sesión.


## Cliente:
Como cliente, en el dashboard podras ver las clases, máquonas, profesores, salas y entrenadores.

### Reservar clase:
 Apredando la navbar clases, podrás ver todas las clases disponibles.  Y para reservar una clase tienes que hacer click en VER y luego en el botón inscribirme.
 ### Reservar máquina:
 Apredando la navbar máquinas, podrás ver todas las máquinas disponibles.  Y para reservar una máquina tienes que hacer click en RESERVAR.
 ### Chat:
 ### Perfil de salud:
  Cada cliente cuenta con un perfil de salud, que deberá ser visualizado en la navbar.
 
 ## Administrador:

El administrador puede, agregar o eliminar clases, gestionar a los usuarios.
Puede crear o eliminar citas con especialista



## Cloudinary

Se hizo el backend de las máquina y eventos para agregar las fotos, el formulario de creación de máquinas y eventos permite arrastrar una fotografía, sin embargo a la hora de mostrar la máquina la imágen no se mostraba en pantalla. No se pudo identificar la causa de este error por lo que se dejó solo el backend de cloudinary y para la proxima entrega debería ser visible.


# RUTAS 
## Usuarios
/users - ruta para visualizar todos los usuarios
/users/:id ruta para ver el perfil de cada usuario y sus chats con otros usuarios, hay un enlace para ver la conversación.

El delete y update está creado pero no fue posible subirlo a tiempo, al igual que la eliminación de conversaciones. No se consideró el caso de eliminar ni editar mensajes individuales ni edición de las conversaciones, ya que no tienen sentido (conversation hasMany messages)


## Conversaciones
/conversations/:id ruta para ver una conversación con todos sus mensajes. Desde esta misma ruta se puede enviar un nuevo mensaje (solo si es uno de los usuarios que pertenece a la conversación) 


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

## Cita con especialista
/appointments

El administrador puede crear citas de cualquier especialista, por ahora necesita su id.
Un especialista solo puede crear citas propias (ya no necesita id)
Un especialista y el administrador pueden cambiar el estado de la cita (agendada, realizada, cancelada y no asiste) en la vista de la cita.
Un cliente puede agendar y desagendar horas dispoi¡nibles.

## Inscripciones a clases
Un cliente se puede inscribir a todas las clases que quiera y también se puede desinscribir. (en la ruta de cada clase /event/:id)

## Consideraciones:




# Entega 3
La aplicación se encuentra en el siguiente link: https://ancient-ocean-79502.herokuapp.com (desde la entrega 4 fue actualizado)


# Rutas:
## Página principal: https://ancient-ocean-79502.herokuapp.com
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
