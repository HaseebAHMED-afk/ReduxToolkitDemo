import { Server, Model } from 'miragejs'

export function makeServer({environment= 'test'}={}){
    let server = new Server({
        environment,
        routes(){
            this.namespace='/api';

            this.get('/updateCounter', () => {
                return 35;
            },{
                timing: 3000
            }
            
            )
        }
    })
}