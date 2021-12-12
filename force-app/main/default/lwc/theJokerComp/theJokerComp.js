/**
 * @description       :
 * @author            : Soomjeet Sahoo
 * @group             :
 * @last modified on  : 12-12-2021
 * @last modified by  : Soomjeet Sahoo
**/
import { LightningElement } from 'lwc';

// const JOKE_URL = "https://v2.jokeapi.dev/joke/Any";
const JOKE_URL = "https://v2.jokeapi.dev/joke/Miscellaneous";
export default class TheJokerComp extends LightningElement {

    randomJokeQues="initializing...";
    randomJokeAns="initializing...";

    connectedCallback() {
        this.fetchJokeCallout();
    }

    refreshJoke(){
        this.fetchJokeCallout();
    }

    fetchJokeCallout(){
        let resp = fetch(JOKE_URL);
        resp.then(res => res.json())
        .then(joke => {
            console.log(joke);
            console.log((joke.type=="twopart"));
            if(joke.type=="twopart"){
                this.randomJokeQues = joke.setup;
                this.randomJokeAns = joke.delivery;
            }
            else{
               this.refreshJoke();
            }
        }).catch(err => {
            this.randomJokeQues = this.randomJokeAns = "error occured";
        })
    }
}