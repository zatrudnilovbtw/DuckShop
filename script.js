document.addEventListener('DOMContentLoaded', function() {
    const callbackBtn = document.querySelector('.callback-btn');
    const popup = document.querySelector('.popup');
    const closeBtn = document.querySelector('.close-btn');
    
    const navBtn = document.querySelector('.nav-btn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileCloseBtn = document.getElementById('mobileCloseBtn');
    const mobileCallbackBtn = document.querySelector('.mobile-callback-btn');
    
    callbackBtn.addEventListener('click', function() {
        if (popup.style.display === 'block') {
            popup.style.display = 'none';
        } else {
            popup.style.display = 'block';
        }
    });
    
    if (mobileCallbackBtn) {
        mobileCallbackBtn.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
            popup.style.display = 'block';
        });
    }
    
    closeBtn.addEventListener('click', function() {
        popup.style.display = 'none';
    });
    
    document.addEventListener('click', function(event) {
        if (!popup.contains(event.target) && event.target !== callbackBtn && event.target !== mobileCallbackBtn) {
            popup.style.display = 'none';
        }
    });
    
    if (navBtn && mobileMenu && mobileCloseBtn) {
        navBtn.addEventListener('click', function() {
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            if (typeof AOS !== 'undefined') {
                setTimeout(function() {
                    AOS.refresh();
                }, 100);
            }
        });
        
        mobileCloseBtn.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
});
