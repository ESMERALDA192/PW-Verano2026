# GONZALEZ NONATO NELLY ESMERALDA
# 22400593
# LUNES 22 DE JUNIO 2026

# crear archivo comando_git.md
# 1comando
# 2 descripcion del comando
# 3ejemplo de caso de uso

# INVESTIGACION DE COMANDOS

01 git init
# Descripción:
Crea un nuevo repositorio Git en el directorio actual. Genera la carpeta oculta .git con toda la estructura interna de Git.
# Ejemplo de uso:
git init
# o para crear en una carpeta nueva:
git init mi-proyecto


02 git clone
# Descripción:
Descarga una copia completa de un repositorio remoto con todo su historial en tu máquina local.
# Ejemplo de uso:
git clone https://github.com/usuario/repo.git
#Clonar en una carpeta con otro nombre:
git clone https://github.com/usuario/repo.git mi-carpeta


03 git status
# Descripción:
Indica qué archivos han sido modificados, cuáles están en staging y cuáles no están siendo rastreados por Git.
# Ejemplo de uso:
git status
#Versión corta:
git status -s


04 git add
# Descripción:
Prepara archivos modificados para el siguiente commit. Puedes agregar archivos específicos o todos los cambios a la vez.
# Ejemplo de uso:
git add index.html
# Todos los archivos modificados:
git add .
# Por partes interactivo:
git add -p


05 git commit
# Descripción:
Registra los cambios del staging en el historial del repositorio con un mensaje descriptivo.
# Ejemplo de uso:
git commit -m "feat: agrega formulario de login"
# Agrega y commitea en un solo paso:
git commit -am "fix: corrige error en validación"


06 git log
# Descripción:
Lista todos los commits del repositorio en orden cronológico inverso, con autor, fecha y mensaje.
# Ejemplo de uso:
git log
# Compacto una línea por commit:
git log --oneline
# Con gráfico de ramas:
git log --oneline --graph --all


07 git diff
# Descripción:
Compara los cambios entre el área de trabajo, el staging o entre commits específicos.
# Ejemplo de uso:
git diff
# Cambios en staging vs último commit:
git diff --staged
# Entre dos commits:
git diff abc123 def456


08 git branch
# Descripción:
Lista, crea, renombra o elimina ramas dentro del repositorio local.
# Ejemplo de uso:
git branch
# Crear nueva rama:
git branch feature/login
# Eliminar rama:
git branch -d feature/login


09 git checkout
# Descripción:
Permite moverse entre ramas existentes o restaurar archivos a una versión anterior del historial.
# Ejemplo de uso:
git checkout main
# Crear y cambiar a nueva rama:
git checkout -b feature/registro
# Restaurar un archivo:
git checkout -- archivo.js


10 git switch
# Descripción:
Alternativa moderna y específica a git checkout para cambiar entre ramas. Más clara y segura.
# Ejemplo de uso:
git switch main
# Crear y cambiar a nueva rama:
git switch -c feature/dashboard


11 git merge
# Descripción:
Integra los cambios de otra rama dentro de la rama activa. Puede generar conflictos que debes resolver manualmente.
# Ejemplo de uso:
git checkout main
git merge feature/login
# Merge sin fast-forward:
git merge --no-ff feature/login


12 git rebase
# Descripción:
Mueve o combina una secuencia de commits a una nueva base, creando un historial más limpio y lineal.
# Ejemplo de uso:
git checkout feature/login
git rebase main
# Interactivo para limpiar commits:
git rebase -i HEAD~3


13 git stash
# Descripción:
Almacena cambios no commiteados en una pila temporal para que puedas cambiar de rama sin perder el trabajo.
# Ejemplo de uso:
git stash
# Ver lista de stashes:
git stash list
# Recuperar el último stash:
git stash pop
# Guardar con descripción:
git stash push -m "wip: formulario a medias"


14 git remote
# Descripción:
Administra las conexiones a repositorios remotos. Permite ver, agregar, renombrar o eliminar remotos.
# Ejemplo de uso:
git remote -v
# Agregar un remoto:
git remote add origin https://github.com/user/repo.git
# Cambiar URL:
git remote set-url origin https://nueva-url.git


15 git fetch
# Descripción:
Descarga los cambios del repositorio remoto al local pero sin hacer merge automático. Útil para revisar antes de integrar.
# Ejemplo de uso:
git fetch origin
# Traer de todos los remotos:
git fetch --all
# Ver qué llegó:
git log origin/main --oneline


16 git pull
# Descripción:
Combina git fetch + git merge. Trae los cambios del remoto y los integra automáticamente en la rama actual.
# Ejemplo de uso:
git pull origin main
# Pull con rebase en vez de merge:
git pull --rebase origin main


17 git push
# Descripción:
Envía los commits locales al repositorio remoto. En el primer push de una rama nueva hay que indicar el upstream.
# Ejemplo de uso:
git push origin main
# Primera vez en rama nueva:
git push -u origin feature/login
# Forzar con cuidado:
git push --force-with-lease


18 git reset
# Descripción:
Mueve el puntero HEAD a un commit anterior. Dependiendo del modo puede o no afectar los archivos.
# Ejemplo de uso:
git reset HEAD archivo.js
# Deshacer último commit, conservar cambios:
git reset --soft HEAD~1
# Deshacer y borrar cambios:
git reset --hard HEAD~1


19 git revert
# Descripción:
Crea un nuevo commit que deshace los cambios de un commit anterior. No reescribe el historial, es seguro en ramas compartidas.
# Ejemplo de uso:
git revert HEAD
# Revertir un commit específico:
git revert abc1234
# Sin abrir editor:
git revert --no-edit HEAD


20 git tag
# Descripción:
Crea etiquetas para marcar puntos importantes en el historial, como versiones de lanzamiento.
# Ejemplo de uso:
git tag
# Crear tag ligero:
git tag v1.0
# Tag anotado recomendado:
git tag -a v1.0 -m "Primera versión estable"
# Subir tags al remoto:
git push origin --tags
