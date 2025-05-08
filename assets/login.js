document.addEventListener('DOMContentLoaded', function() {
    const buatAkunButton = document.querySelector('.create-account-button');
    const lupaPasswordLink = document.querySelector('.forgot-password');
    const modalBuatAkun = document.getElementById('modal-buat-akun');
    const modalLupaPassword = document.getElementById('modal-lupa-password');
    const closeButtons = document.querySelectorAll('.close-button');
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');
    const buatAkunForm = document.getElementById('buatAkunForm');
    const lupaPasswordForm = document.getElementById('lupaPasswordForm');

    buatAkunButton.addEventListener('click', function() {
        modalBuatAkun.style.display = 'block';
    });

    lupaPasswordLink.addEventListener('click', function(event) {
        event.preventDefault();
        modalLupaPassword.style.display = 'block';
    });

    closeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const modal = this.closest('.modal');
            modal.style.display = 'none';
        });
    });

    window.addEventListener('click', function(event) {
        if (event.target === modalBuatAkun) {
            modalBuatAkun.style.display = 'none';
        }
        if (event.target === modalLupaPassword) {
            modalLupaPassword.style.display = 'none';
        }
    });

    // Validasi dan Login Dummy
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah pengiriman form yang sebenarnya

        let isValid = true;
        usernameError.textContent = '';
        passwordError.textContent = '';

        if (usernameInput.value.trim() === '') {
            usernameError.textContent = 'Nama Pengguna tidak boleh kosong!';
            isValid = false;
        }

        if (passwordInput.value.trim() === '') {
            passwordError.textContent = 'Kata Sandi tidak boleh kosong!';
            isValid = false;
        }

        if (isValid) {
            // Ganti dengan username dan password dummy Anda
            const dummyUsername = 'prmbagong';
            const dummyPassword = 'secret';

            if (usernameInput.value === dummyUsername && passwordInput.value === dummyPassword) {
                window.location.href = 'dashboard.html'; // Alihkan ke dashboard
            } else {
                passwordError.textContent = 'Nama Pengguna atau Kata Sandi salah.';
            }
        }
    });

    // Validasi Form Buat Akun (Perbaikan - Menampilkan pesan error di HTML)
    if (buatAkunForm) {
        buatAkunForm.addEventListener('submit', function(event) {
            let isValid = true;
            const namaLengkapInput = document.getElementById('nama_lengkap');
            const usernameBaruInput = document.getElementById('username_baru');
            const passwordBaruInput = document.getElementById('password_baru');
            const konfirmasiPasswordInput = document.getElementById('konfirmasi_password');
            const namaLengkapError = document.getElementById('nama_lengkapError'); // Pastikan ada span dengan ID ini di HTML
            const usernameBaruError = document.getElementById('username_baruError');
            const passwordBaruError = document.getElementById('password_baruError');
            const konfirmasiPasswordError = document.getElementById('konfirmasi_passwordError');

            // Reset error messages
            if (namaLengkapError) namaLengkapError.textContent = '';
            if (usernameBaruError) usernameBaruError.textContent = '';
            if (passwordBaruError) passwordBaruError.textContent = '';
            if (konfirmasiPasswordError) konfirmasiPasswordError.textContent = '';

            if (namaLengkapInput.value.trim() === '') {
                if (namaLengkapError) namaLengkapError.textContent = 'Nama Lengkap tidak boleh kosong!';
                isValid = false;
            }
            if (usernameBaruInput.value.trim() === '') {
                if (usernameBaruError) usernameBaruError.textContent = 'Username baru tidak boleh kosong!';
                isValid = false;
            }
            if (passwordBaruInput.value.trim() === '') {
                if (passwordBaruError) passwordBaruError.textContent = 'Password baru tidak boleh kosong!';
                isValid = false;
            }
            if (konfirmasiPasswordInput.value.trim() === '') {
                if (konfirmasiPasswordError) konfirmasiPasswordError.textContent = 'Konfirmasi Password tidak boleh kosong!';
                isValid = false;
            }
            if (passwordBaruInput.value !== konfirmasiPasswordInput.value) {
                if (konfirmasiPasswordError) konfirmasiPasswordError.textContent = 'Password baru dan Konfirmasi Password tidak cocok!';
                isValid = false;
            }

            if (!isValid) {
                event.preventDefault();
            } else {
                alert('Pendaftaran berhasil (simulasi)!');
                modalBuatAkun.style.display = 'none';
                buatAkunForm.reset();
                event.preventDefault();
            }
        });
    }

    // Validasi Form Lupa Password (Perbaikan - Menampilkan pesan error di HTML)
    if (lupaPasswordForm) {
        lupaPasswordForm.addEventListener('submit', function(event) {
            const emailUsernameInput = document.getElementById('email_username');
            const emailUsernameError = document.getElementById('email_usernameError'); // Pastikan ada span dengan ID ini di HTML

            if (emailUsernameError) emailUsernameError.textContent = '';

            if (emailUsernameInput.value.trim() === '') {
                if (emailUsernameError) emailUsernameError.textContent = 'Email atau Username tidak boleh kosong!';
                event.preventDefault();
            } else {
                alert('Permintaan reset password terkirim (simulasi)!');
                modalLupaPassword.style.display = 'none';
                lupaPasswordForm.reset();
                event.preventDefault();
            }
        });
    }
});