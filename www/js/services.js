angular.module('starter.services',[])
.service('WC', function(){
    return {
        WC: function(){
            var Woocommerce = new WooCommerceAPI.WooCommerceAPI({
                url: 'http://donation.mcw.sa',
                consumerKey: 'ck_81562c7285253bf54b37908cc5ba589711fbcc5a',
                consumerSecret: 'cs_5ad49141fcb5f6b5e986817476d03ec9c31a2a4b'
            });
            return Woocommerce;
        }
}});