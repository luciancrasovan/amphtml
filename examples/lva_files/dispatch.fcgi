/*
(c) Copyright Weborama SA - France. All rights reserved.
It is illegal to modify, disassemble, sell, copy or publish this software
or any part thereof. The use of this software is only permitted with the
prior and express written permission of Weborama SA - France.
More information: http://www.weborama.com/contacts/
*/
function x17() {
    var x1cl, x1ey = x1bb.x1cj();
    x1ey.x1ie = x1bb.x1nn(x1ey.x1ie,'wuid=&retargeting=&');
    x1ey.x1fN = 'https://cstatic.weborama.fr/advertiser/1549/42/1226/1535/';
    x1ey.x1lp = '10531';



    x1ey.conf_oba = false;
    
    adperfobj.zindex = adperfobj.zindex || 0 || 214748360;

    adperfobj.clicks = new Array();
    adperfobj.clicks[0] = 'https://adclick.g.doubleclick.net/pcs/click?xai=AKAOjstQFMSt6oAWvm0VIhEATHcZ8aNJVhTCqxH5w5oSJoDHlSxLCSWjO9WnCQFdn5_0vNkdRyW0c3T15wJfh9NDPUH738-QZx8IaoAIvnGrzwSC94edDyXM-TrXAev0SWp8ZCKlNlhvV6baX_xbxwUsSIvDuFJ3hmvIOxHGc3b5E4l24hz4SKgwbWX07Xpq7zoJjR5_OPwTlSBYjzTYZYRqFq8n87zDyuI_QubBqEG2YFwxixIsQn_EytNmDkoR6_NCLZwdfFj72g1FeH6T3fJF&sig=Cg0ArKJSzOwICnd7rBKmEAE&urlfix=1&adurl=https%3A%2F%2Fbankinteres.solution.weborama.fr%2Ffcgi-bin%2Fdispatch.fcgi%3Fa.A%3Dcl%26a.si%3D1549%26a.te%3D3984%26a.aap%3D10531%26a.agi%3D30%26g.lu%3D' + (adperfobj.landing_urls[0] || '');


    try{
        adperfobj.imptrackers = new Array(
                'https://bankinter.demdex.net/event?d_event=imp&d_adsrc=1549&d_bu=-1&d_bust=880127&d_src=2018&d_adgroup=&d_campaign=01.Bankinter-CuentaNomina-DisplayProgramatica-Enero2018&d_creative=300x250_gestor-abril&d_exch=12345&d_io=12345&d_placement=Publipress_ROS_Display_300x250&d_site=Publipres'
        );

        adperfobj.clicktrackers = (new Array(
                'https://bankinter.demdex.net/event?d_event=click&d_adsrc=5&d_bu=-1&d_bust=880127&d_src=2018&d_adgroup=&d_campaign=01.Bankinter-CuentaNomina-DisplayProgramatica-Enero2018&d_creative=300x250_gestor-abril&d_exch=12345&d_io=12345&d_placement=Publipress_ROS_Display_300x250&d_site=Publipres&d_rd='
        ).concat(adperfobj.clicktrackers));

        adperfobj.eventtrackers = (new Array(
                
        ).concat(adperfobj.eventtrackers));
    }catch(scr_e){}



    x1ey.addTrackers(adperfobj);
    x1ey.addClicks(adperfobj);

    x1cl = new x1bb.x1ig();
x1cl.x1c(x1ey, 7243, 'banner_300x250.html', adperfobj.width, adperfobj.height, '', '', '');
x1ey.x1gG(x1cl, '', 2, '');
x1cl = new x1bb.x1hW();
x1cl.x1c(x1ey, 7244, 'BANNER_300x250_GESTOR.gif', adperfobj.width, adperfobj.height, '', '', '');
x1ey.x1gG(x1cl, '', 2, '');




    x1ey.x1gQ();


}
x1L('adperf_core_' + adperf_version + '_scrambled.js');