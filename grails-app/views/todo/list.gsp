<h1>List of todos</h1>
<table class="table table-striped">
    <tr ng-repeat="todo in todos">
        <td>{{todo.title}}</td>
        <td>{{todo.content}}</td>
        <td>{{todo.url}}</td>
    </tr>
</table>
