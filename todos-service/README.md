# todos-service

### Todos
```sh
# GET all users todo
curl -X GET localhost:4001/api/v1/todos?user=userId

# POST create todo
curl -X POST localhost:4001/api/v1/todos -H "Content-Type:application/json" -d "{\"body\":\"EXAMPLE\",\"user\":\"userId\"}"

# GET todo
curl -X GET localhost:4001/api/v1/todos/:todoId

# PUT edit todo
curl -X PUT localhost:4001/api/v1/todos/:todoId -H "Content-Type:application/json" -d "{\"body\":\"EXAMPLE\",\"user\":\"userId\",\"done\":\"EXAMPLE\"}"

# DELETE todo
curl -X DELETE localhost:4001/api/v1/todos/:todoId
```
### Projects
```sh
# GET all users project
curl -X GET localhost:4001/api/v1/projects?user=userId

# POST create project
curl -X POST localhost:4001/api/v1/projects -H "Content-Type:application/json" -d "{\"title\":\"EXAMPLE\",\"user\":\"userId\"}"

# GET project
curl -X GET localhost:4001/api/v1/projects/:projectId

# PUT edit project
curl -X PUT localhost:4001/api/v1/projects/:projectId -H "Content-Type:application/json" -d "{\"title\":\"EXAMPLE\",\"user\":\"userId\"}"

# DELETE project
curl -X DELETE localhost:4001/api/v1/projects/:projectId
```
