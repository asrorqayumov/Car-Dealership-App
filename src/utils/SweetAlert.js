import Swal from 'sweetalert2'

export const SweetAlert = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 1200,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  export const Alert = (status,message)=>{
    SweetAlert.fire({
      icon: status,
      title: `${message}`,
    }); 
  } 