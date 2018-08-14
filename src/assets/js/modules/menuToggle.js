const menu = {
    openNav() {
        $('.sidenav').width('100%');

    },
    closeNav() {
        $('.sidenav').width(0);
    }
};

$('.openbtn').click(menu.openNav);
$('.closebtn').click(menu.closeNav);  