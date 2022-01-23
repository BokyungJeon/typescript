{
    type ToDo = {
        title: string;
        description: string;
    };

    function display(todo: Readonly<ToDo>) { // 앞에서 만든 Readonly<>같은 것들이 utility type으로 이미 타입스크립트에 구현되어 있음
        // (Partial<>, Required<>, Pick<>...)
        // todo.title = 'jaja'; // error. 수정불가. 불변성 유지
    }
}