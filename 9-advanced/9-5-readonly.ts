{
    type ToDo = {
        title: string;
        description: string;
    };

    function display(todo: Readonly<ToDo>) { // Readonly<>같은 것들이 utility type으로 이미 타입스크립트에 구현되어 있음
        // todo.title = 'jaja';
    }
}