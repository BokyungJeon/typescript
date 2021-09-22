type PageInfo = {
    title: string;
};
type Page = 'home' | 'about' | 'contact';

const nav: Record<Page, PageInfo> = { // 타입을 연결한다. 하나는 키 하나는 타입
    home: {title: 'Home'},
    about: {title: 'About'},
    contact: {title: 'Contact'},
}

type Product = 'cat' | 'dog';
type NewProduct = Capitalize<Product>; // 'Cat' | 'Dog'

// 이 외에도 굉장히 많은 Utility Type이 있다.