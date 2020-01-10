import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-inicio',
    templateUrl: './inicio.page.html',
    styleUrls: ['./inicio.page.scss']
})
export class InicioPage implements OnInit {
    components: Componente[] = [
        {
            icon: 'american-football',
            name: 'Action-sheet',
            redirectTo: '/action-sheet'
        },
        {
            icon: 'appstore',
            name: 'Alert',
            redirectTo: '/alert'
        }
    ];

    constructor() {}

    ngOnInit() {}
}