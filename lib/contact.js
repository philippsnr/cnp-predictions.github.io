const username = document.getElementById('username');
const email = document.getElementById('email');
const message = document.getElementById('message');
const submit = document.getElementsByClassName('form-contact')[0];
const form = document.getElementById('contact-form');
const done = document.getElementById('contact-done-before');

const signature = '<table cellpadding="0" cellspacing="0" class="table__StyledTable-sc-1avdl6r-0 kAbRZI" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial;"> <tbody> <tr> <td> <table cellpadding="0" cellspacing="0" class="table__StyledTable-sc-1avdl6r-0 kAbRZI" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial;"> <tbody> <tr> <td style="vertical-align: top;"> <table cellpadding="0" cellspacing="0" class="table__StyledTable-sc-1avdl6r-0 kAbRZI" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial;"> <tbody> <tr> <td height="30"></td></tr><tr> <td style="text-align: center;"> <table cellpadding="0" cellspacing="0" class="table__StyledTable-sc-1avdl6r-0 kAbRZI" style="display: inline-block; vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial;"> <tbody> <tr style="text-align: center;"> <td><a href="https://www.instagram.com/cnp.predictions/" color="#6a78d1" class="social-links__LinkAnchor-sc-py8uhj-2 hBVWAh" style="display: inline-block; padding: 0px; background-color: rgb(106, 120, 209);"><img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/instagram-icon-2x.png" alt="instagram" color="#6a78d1" height="24" class="social-links__LinkImage-sc-py8uhj-1 hSTSwA" style="background-color: rgb(106, 120, 209); max-width: 135px; display: block;"></a> </td><td width="5"> <div></div></td></tr></tbody> </table> </td></tr></tbody> </table> </td><td width="46"> <div></div></td><td style="padding: 0px; vertical-align: middle;"> <h2 color="#000000" class="name__NameContainer-sc-1m457h3-0 jxbGUj" style="margin: 0px; font-size: 18px; color: rgb(0, 0, 0); font-weight: 600;"> <span>CNP Predictions</span><span>&nbsp;</span><span></span></h2> <p color="#000000" font-size="medium" class="job-title__Container-sc-1hmtp73-0 ifJNJc" style="margin: 0px; color: rgb(0, 0, 0); font-size: 14px; line-height: 22px;"> <span>Football predictions based on AI</span></p><p color="#000000" font-size="medium" class="company-details__CompanyContainer-sc-j5pyy8-0 VnOLK" style="margin: 0px; font-weight: 500; color: rgb(0, 0, 0); font-size: 14px; line-height: 22px;"> <span>Support</span></p><table cellpadding="0" cellspacing="0" class="table__StyledTable-sc-1avdl6r-0 kAbRZI" style="width: 100%; vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial;"> <tbody> <tr> <td height="30"></td></tr><tr> <td color="#f2547d" direction="horizontal" width="auto" height="1" class="color-divider__Divider-sc-1h38qjv-0 llIisW" style="width: 100%; border-bottom: 1px solid rgb(242, 84, 125); border-left: none; display: block;"> </td></tr><tr> <td height="30"></td></tr></tbody> </table> <table cellpadding="0" cellspacing="0" class="table__StyledTable-sc-1avdl6r-0 kAbRZI" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial;"> <tbody> <tr height="25" style="vertical-align: middle;"> <td width="30" style="vertical-align: middle;"> <table cellpadding="0" cellspacing="0" class="table__StyledTable-sc-1avdl6r-0 kAbRZI" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial;"> <tbody> <tr> <td style="vertical-align: bottom;"><span color="#f2547d" width="11" class="contact-info__IconWrapper-sc-mmkjr6-1 bglVXe" style="display: inline-block; background-color: rgb(242, 84, 125);"><img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/email-icon-2x.png" color="#f2547d" alt="emailAddress" width="13" class="contact-info__ContactLabelIcon-sc-mmkjr6-0 cnkwri" style="display: block; background-color: rgb(242, 84, 125);"></span> </td></tr></tbody> </table> </td><td style="padding: 0px;"><a href="mailto:info@cnp-predictions.de" color="#000000" class="contact-info__ExternalLink-sc-mmkjr6-2 ibLXSU" style="text-decoration: none; color: rgb(0, 0, 0); font-size: 12px;"><span>info@cnp-predictions.de</span></a> </td></tr><tr height="25" style="vertical-align: middle;"> <td width="30" style="vertical-align: middle;"> <table cellpadding="0" cellspacing="0" class="table__StyledTable-sc-1avdl6r-0 kAbRZI" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial;"> <tbody> <tr> <td style="vertical-align: bottom;"><span color="#f2547d" width="11" class="contact-info__IconWrapper-sc-mmkjr6-1 bglVXe" style="display: inline-block; background-color: rgb(242, 84, 125);"><img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/link-icon-2x.png" color="#f2547d" alt="website" width="13" class="contact-info__ContactLabelIcon-sc-mmkjr6-0 cnkwri" style="display: block; background-color: rgb(242, 84, 125);"></span> </td></tr></tbody> </table> </td><td style="padding: 0px;"><a href="//www.cnp-predictions.de" color="#000000" class="contact-info__ExternalLink-sc-mmkjr6-2 ibLXSU" style="text-decoration: none; color: rgb(0, 0, 0); font-size: 12px;"><span>www.cnp-predictions.de</span></a> </td></tr></tbody> </table> <table cellpadding="0" cellspacing="0" class="table__StyledTable-sc-1avdl6r-0 kAbRZI" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial;"> <tbody> <tr> <td height="30"></td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody></table>';

submit.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('clicked');

    Email.send({
        SecureToken : "05223d73-163a-4e20-a33e-cead4591f260",
        To : 'info@cnp-predictions.de',
        From : 'info@cnp-predictions.de',
        Subject : "message from: " + email.value,
        Body : message.value
      }).then(
        message => {
          console.log("E-Mail wurde erfolgreich gesendet");
        }
      ).catch(
        error => {
          console.log("Fehler beim Senden der E-Mail:", error);
        }
      );

    Email.send({
        SecureToken : "05223d73-163a-4e20-a33e-cead4591f260",
        To : email.value,
        From : 'info@cnp-predictions.de',
        Subject : "Contact Formula",
        Body: "<p>Hi " + username.value + ",</p><p>we received your message via our contact formula and try to reply as soon as possible!</p><p>CNP-team</p><br /><br />" + signature,
      }).then(
        response => {
          console.log("E-Mail wurde erfolgreich gesendet");
          form.remove();
          done.classList.add("contact-done-after");
          done.textContent = 'Message sent successfully!';
        }
      ).catch(
        error => {
          console.log("Fehler beim Senden der E-Mail:", error);
        }
      );
})
