{
class TimeoutError extends Error {}
    class OfflineError extends Error {}

    class NetworkClient {
        tryConnect(): void {
            throw new OfflineError('no network!');
        }
    }

    class UserService {
        constructor(private client: NetworkClient) {
        }

        login() {
            // 에러는 발생하는 곳보다는 처리할 수 있는 곳에서 catch하는 것이 더 좋다 -> 여기서는 App
            // try {
            //     this.client.tryConnect();
            // } catch (error) {
            //     console.log('catched')
            // }
            this.client.tryConnect();
        }
    }

    class App {
        constructor(private userService: UserService) {

        }
        run() {
            try {
                this.userService.login();
            } catch (error) { // 타입스크립트에서 catch로 에러를 받으면 any타입으로 변하므로 가급적 예상하지 못한 에러를 받을 때 사용하도록 한다.
                // show dialog to user
                if(error instanceof OfflineError) {
                    // TypeScript에서 구현된 catch()에는 어떠한 타입정보도 전달되지 않아서 여기서 instanceOf를 사용할 수 없다😭
                }
            }
        };
    }

    const client = new NetworkClient();
    const service = new UserService(client);
    const app = new App(service);
    app.run();
}
