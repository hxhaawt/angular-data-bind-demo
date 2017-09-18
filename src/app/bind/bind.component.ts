import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-bind',
    templateUrl: './bind.component.html',
    styleUrls: ['./bind.component.css'],

})
export class BindComponent implements OnInit {

    public imgUrl: string = 'http://placehold.it/800x320';
    public size:number = 3;
    public divClass: string;
    public isBig: boolean = false;

    public divClass2: any = {
        a: false,
        b: false,
        c: false
    };

    public isDev: boolean = false;

    public divStyle: any = {
        color: 'red',
        fontSize: '30px'
    };

    username: string;

    currentDate: Date = new Date();

    pi: number = Math.PI;

    testVal: number = 7;

    constructor() {

        setTimeout( () => {
            // 给这个样式变量增加类似 a b c
            this.divClass = 'a b c';
            // 设置变量为真 显示类似 b
            this.isBig = true;

            this.divClass2 = {
                a: true,
                b: true,
                c: true,
                d: true
            };

            this.isDev = true;

        }, 2000);

    }

    ngOnInit() {

    }

    onClickMe (event: any) {
        console.log(event);
    }

    doOnInpuuut (event: any) {
        // 输出元素的DOM属性的值，这个值是可以变的
        console.log(event.target.value);
        // 获取元素的HTML属性的值，这个值是不变的，初始化是什么就是什么
        console.log( event.target.getAttribute('value'));
    }

}































