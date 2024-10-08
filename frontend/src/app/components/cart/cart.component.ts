import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { sales } from 'src/app/interfaces/sales';
import { ToastrService } from 'ngx-toastr';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { user } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/app/environments/environments';
import { product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  @Input() component?: string;
  @Output() products: EventEmitter<product[]> = new EventEmitter<product[]>();;

  hideModal = false;
  modalRef?: BsModalRef;
  responsePayment: any;
  buttonDisable: boolean = false;
  productsCart: product[] = [];
  cartSales: sales[] = [];
  user!:user;


  private myAppUrl: string = environment.endpoint;
  constructor(private modalService: BsModalService, private cartService: CartService, private alertService: ToastrService, private userService: UserService) {

  }
  ngOnInit() {
    this.cartService.products.subscribe((products) => {
      this.productsCart = products;
      console.log(this.productsCart)
    });
    this.userService.getThisUserBehaviour().subscribe(value => this.user = value)
  }


  deleteProduct(id: number) {
    this.cartService.deleteProduct(id);
  }

  openModal2(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  getUrl(image: string) {
    return `${this.myAppUrl}static/${image}`
  }

  clearCart(){
    this.cartService.clearCart()
  }

}