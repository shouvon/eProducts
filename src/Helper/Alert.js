import Swal, { SweetAlertIcon } from 'sweetalert2';

export class ToastService {
	constructor() {
		this.toast = Swal.mixin({
			toast: true,
			position: 'top-end',
			showConfirmButton: false,
			timer: 2000,
			timerProgressBar: true,
			didOpen: (toast) => {
				toast.addEventListener('mouseenter', Swal.stopTimer);
				toast.addEventListener('mouseleave', Swal.resumeTimer);
			}
		});
	}

	showAlert() {
		this.toast.fire({
			icon: this.icon,
			title: this.title
		});
	}

	static success(msg) {
		const vm = new ToastService();
		vm.icon = 'success';
		vm.title = msg;
		vm.showAlert();
	}

	static error(msg) {
		const vm = new ToastService();
		vm.icon = 'error';
		vm.title = msg;
		vm.showAlert();
	}

	static warning(msg) {
		const vm = new ToastService();
		vm.icon = 'warning';
		vm.title = msg;
		vm.showAlert();
	}

	static info(msg) {
		const vm = new ToastService();
		vm.icon = 'info';
		vm.title = msg;
		vm.showAlert();
	}

	static question(msg) {
		const vm = new ToastService();
		vm.icon = 'question';
		vm.title = msg;
		vm.showAlert();
	}
}

export class Alert {
	static confirm(title = '', desc = '') {
		return new Promise((resolve) => {
			Swal.fire({
				title: title,
				text: desc,
				showCancelButton: true,
				confirmButtonText: 'Yes',
				cancelButtonColor: '#d5d5d5',
				confirmButtonColor: '#8DCBDA',
				icon: 'question'
			}).then((result) => {
				if (result.isConfirmed) {
					return resolve(true);
				} else {
					return resolve(false);
				}
			});
		});
	}
}