{type Video = {
    title: string;
    author: string;
    // description: string;
}
// type VideoOptional = {
//     title?: string;
//     author?: string;
//     description?: string;
// }
//
// type VideoReadOnly = {
//     readonly title: string;
//     readonly author: string;
//     readonly description: string;
// }

// 일일이 찾아서 수정해주는 대신 map의 기능을 이용해 맵타입을 만든다.
// [1, 2].map(item => item * item); // [1, 4]
    type Optional<T> = {
        [P in keyof T]?: T[P] // for ... in
    };

    type ReadOnly<T> = {
        readonly [P in keyof T]: T[P]
    }

    type VideoOptional = Optional<Video>;
    const videoOp: VideoOptional = {
        title: 'hi',
        // animal: // error
    }

    type Animal = {
        name: string;
        age: number;
    };
    const animal: Optional<Animal> = {
        name: 'dog'
    };
    animal.name = 'ellie'

    const video: ReadOnly<Video> = {
        title: 'hi',
        author: 'ellie',
    }
// video.title = 'hello' // error 변경불가
    type Nullable<T> = { [P in keyof T]: T[P] | null };
    const obj2: Nullable<Video> = {
        title: 'hi',
        author: null,
    };

    type Proxy<T> = {
        get(): T;
        set(value: T): void;
    };

    type Proxify<T> = {
        [P in keyof T]: Proxy<T[P]>; // 전달되는 object를 빙글빙글 돌면서 type을 Proxy라는 타입으로 한번 더 감싸준다.
    }
}