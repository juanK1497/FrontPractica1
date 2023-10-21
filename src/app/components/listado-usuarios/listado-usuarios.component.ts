import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { usuario } from 'src/app/interfaces/usuario';


const ListUsuario: usuario[] = [
  {Nombre: 'Camilo', Cedula: 10 , Area:'enver', SubArea:'gadura'  },
  {Nombre: 'Andres', Cedula: 11 , Area:'Mantenimiento', SubArea:'Mantenimiento'  },
  {Nombre: 'Daniela', Cedula: 12 , Area:'esquizofrenia', SubArea:'Mr. esquizofrenia'  },
  {Nombre: 'greysy', Cedula: 11 , Area:'Lachu', SubArea:'pona'  }
];

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css']
})
export class ListadoUsuariosComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['nombre','cedula','area','subarea','accion'];
  dataSource = new MatTableDataSource<usuario>(ListUsuario);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(){}

  ngOnInit(): void{

  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
}
