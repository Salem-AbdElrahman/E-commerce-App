import { Component, inject, OnInit } from '@angular/core';
import { BrandsService } from '../../core/services/brands/brands.service';
import { IBrands } from '../../shared/interfaces/ibrands';



@Component({
  selector: 'app-brands',
  imports: [],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss'
})
export class BrandsComponent implements OnInit {
private readonly brandsService=inject(BrandsService)

brands:IBrands[]=[]
brandsDetails:any;
isClosed:boolean=false;
 ngOnInit(): void {
this.getAllBrands()
 }

 getAllBrands():void{
this.brandsService.getAllBrands().subscribe({
  next:(res)=>{
    console.log(res.data);
    this.brands=res.data
  }
})
 }
 getSpecificBrands(id:string):void{
  this.isClosed=true;
this.brandsService.getSpecificBrands(id).subscribe({
  next:(res)=>{
 console.log(res.data);
 this.brandsDetails=res.data
  }
})
 }

}
