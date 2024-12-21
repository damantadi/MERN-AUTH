export const EMAIL_VERIFY_TEMPLATE = `
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
  <title>Email Verify</title>
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap" rel="stylesheet" type="text/css">
  <style type="text/css">
    body {
      margin: 0;
      padding: 0;
      font-family: 'Open Sans', sans-serif;
      background: #E5E5E5;
    }

    table, td {
      border-collapse: collapse;
    }

    .container {
      width: 100%;
      max-width: 500px;
      margin: 70px 0px;
      background-color: #ffffff;
    }

    .main-content {
      padding: 48px 30px 40px;
      color: #000000;
    }

    .button {
      width: 100%;
      background: #22D172;
      text-decoration: none;
      display: inline-block;
      padding: 10px 0;
      color: #fff;
      font-size: 14px;
      text-align: center;
      font-weight: bold;
      border-radius: 7px;
    }

    @media only screen and (max-width: 480px) {
      .container {
        width: 80% !important;
      }

      .button {
        width: 50% !important;
      }
    }
  </style>
</head>

<body>
  <table width="100%" cellspacing="0" cellpadding="0" border="0" align="center" bgcolor="#F6FAFB">
    <tbody>
      <tr>
        <td valign="top" align="center">
          <table class="container" width="600" cellspacing="0" cellpadding="0" border="0">
            <tbody>
              <tr>
                <td class="main-content">
                  <table width="100%" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                      <tr>
                        <td style="padding: 0 0 24px; font-size: 18px; line-height: 150%; font-weight: bold;">
                          Verify your email
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 0 0 10px; font-size: 14px; line-height: 150%;">
                          You are just one step away to verify your account for this email: <span style="color: #4C83EE;">{{email}}</span>.
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 0 0 16px; font-size: 14px; line-height: 150%; font-weight: 700;">
                          Use below OTP to verify your account.
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 0 0 24px;">
                          <p class="button" >{{otp}}</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 0 0 10px; font-size: 14px; line-height: 150%;">
                          This OTP is valid for 24 hours.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
</body>
</html>

`

export const PASSWORD_RESET_TEMPLATE = `

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
  <title>Password Reset</title>
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap" rel="stylesheet" type="text/css">
  <style type="text/css">
    body {
      margin: 0;
      padding: 0;
      font-family: 'Open Sans', sans-serif;
      background: #E5E5E5;
    }

    table, td {
      border-collapse: collapse;
    }

    .container {
      width: 100%;
      max-width: 500px;
      margin: 70px 0px;
      background-color: #ffffff;
    }

    .main-content {
      padding: 48px 30px 40px;
      color: #000000;
    }

    .button {
      width: 100%;
      background: #22D172;
      text-decoration: none;
      display: inline-block;
      padding: 10px 0;
      color: #fff;
      font-size: 14px;
      text-align: center;
      font-weight: bold;
      border-radius: 7px;
    }

    @media only screen and (max-width: 480px) {
      .container {
        width: 80% !important;
      }

      .button {
        width: 50% !important;
      }
    }
  </style>
</head>

<body>
  <table width="100%" cellspacing="0" cellpadding="0" border="0" align="center" bgcolor="#F6FAFB">
    <tbody>
      <tr>
        <td valign="top" align="center">
          <table class="container" width="600" cellspacing="0" cellpadding="0" border="0">
            <tbody>
              <tr>
                <td class="main-content">
                  <table width="100%" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                      <tr>
                        <td style="padding: 0 0 24px; font-size: 18px; line-height: 150%; font-weight: bold;">
                          Forgot your password?
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 0 0 10px; font-size: 14px; line-height: 150%;">
                          We received a password reset request for your account: <span style="color: #4C83EE;">{{email}}</span>.
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 0 0 16px; font-size: 14px; line-height: 150%; font-weight: 700;">
                          Use the OTP below to reset the password.
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 0 0 24px;">
                          <p class="button" >{{otp}}</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 0 0 10px; font-size: 14px; line-height: 150%;">
                          The password reset otp is only valid for the next 15 minutes.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
</body>
</html>
`
export const WELCOME_TEMPLATE =`<html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <meta name="x-apple-disable-message-reformatting">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="telephone=no" name="format-detection">
    <title></title>
    <!--[if (mso 16)]>
    <style type="text/css">
    a {text-decoration: none;}
    </style>
    <![endif]-->
    <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]-->
    <!--[if !mso]><!-- -->
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i" rel="stylesheet">
    <!--<![endif]-->
    <!--[if gte mso 9]>
<noscript>
         <xml>
           <o:OfficeDocumentSettings>
           <o:AllowPNG></o:AllowPNG>
           <o:PixelsPerInch>96</o:PixelsPerInch>
           </o:OfficeDocumentSettings>
         </xml>
      </noscript>
<![endif]-->
    <!--[if mso]><xml>
    <w:WordDocument xmlns:w="urn:schemas-microsoft-com:office:word">
      <w:DontUseAdvancedTypographyReadingMail/>
    </w:WordDocument>
    </xml><![endif]-->
  </head>
  <body class="body">
    <div dir="ltr" class="es-wrapper-color">
      <!--[if gte mso 9]>
			<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
				<v:fill type="tile" color="#ffffff"></v:fill>
			</v:background>
		<![endif]-->
      <table width="100%" cellspacing="0" cellpadding="0" class="es-wrapper">
        <tbody>
          <tr>
            <td valign="top" class="esd-email-paddings">

              <table cellspacing="0" cellpadding="0" align="center" class="es-content">
                <tbody>
                  <tr>
                    <td align="center" class="esd-stripe">
                      <table esd-img-prev-src width="600" cellspacing="0" cellpadding="0" align="center" class="es-content-body" style="background-color:transparent">
                        <tbody>
                          <tr>
                            <td esd-img-prev-src align="left" class="esd-structure">
                              <table width="100%" cellspacing="0" cellpadding="0">
                                <tbody>
                                  <tr>
                                    <td width="600" valign="top" align="center" class="esd-container-frame">
                                      <table esd-img-prev-src width="100%" cellspacing="0" cellpadding="0" bgcolor="#fcfcfc" style="border-radius:3px;border-collapse:separate;background-color:rgb(252, 252, 252)">
                                        <tbody>
                                          <tr>
                                            <td align="left" class="esd-block-text es-p30t es-p20r es-p20l">
                                              <h2 class="es-m-txt-l" style="color:#333333">
                                                Welcome!
                                              </h2>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td bgcolor="#fcfcfc" align="left" class="esd-block-text es-p10t es-p20r es-p20l">
                                              <p>
                                                Hi {{name}}, we’re glad you’re here! Welcome to MERN! 🎉 We’re so excited to have you as part of our community. Thank you for signing up and taking the first step toward  MERN.<br>

                                                We’re here to make your experience amazing, and we can’t wait for you to get started!.<br>
                                              </p>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td esd-img-prev-src bgcolor="#fcfcfc" align="left" class="esd-structure es-p30t es-p20r es-p20l" style="background-color:rgb(252, 252, 252)">
                              <table width="100%" cellspacing="0" cellpadding="0">
                                <tbody>
                                  <tr>
                                    <td width="560" valign="top" align="center" class="esd-container-frame">
                                      <table esd-img-prev-src width="100%" cellspacing="0" cellpadding="0" bgcolor="#ffffff" style="border-color:rgb(239, 239, 239);border-style:solid;border-width:1px;border-radius:3px;border-collapse:separate;background-color:rgb(255, 255, 255)">
                                        <tbody>
                                          <tr>
                                            <td align="center" class="esd-block-text es-p20t es-p15b">
                                              <h3 style="color:#333333">
                                                Your account information:
                                              </h3>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td align="center" class="esd-block-text">
                                              <p style="color:rgb(100, 67, 74);font-size:16px;line-height:150%">
                                                Username: {{name}}
                                              </p>
                                              <p style="color:rgb(100, 67, 74);font-size:16px;line-height:150%">
                                                Email: {{email}}
                                              </p>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td align="center" class="esd-block-button es-p20t es-p20b es-p10r es-p10l">
                                              <span class="es-button-border" style="background:rgb(248, 243, 239) none repeat scroll 0% 0%">
                                                <a href="https://viewstripo.email/" target="_blank" class="es-button" style="background:rgb(248, 243, 239) none repeat scroll 0% 0%;border-color:rgb(248, 243, 239)">
                                                  Log In Now
                                                </a>
                                              </span>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table cellspacing="0" cellpadding="0" align="center" class="es-content">
                <tbody>
                  <tr>
                    <td align="center" class="esd-stripe">
                      <table esd-img-prev-src width="600" cellspacing="0" cellpadding="0" bgcolor="#fcfcfc" align="center" class="es-content-body" style="background-color:rgb(252, 252, 252)">
                        <tbody>
                          <tr>
                            <td esd-img-prev-src align="left" class="esd-structure es-p40t es-p25b es-p20r es-p20l">
                              <!--[if mso]><table width="560" cellpadding="0" 
                            cellspacing="0"><tr><td width="274" valign="top"><![endif]-->
                              <table cellspacing="0" cellpadding="0" align="left" class="es-left">
                                <tbody>
                                  <tr>
                                    <td width="254" align="center" class="es-m-p0r es-m-p20b esd-container-frame">
                                      <table width="100%" cellspacing="0" cellpadding="0">
                                        <tbody>
                                          <tr>
                                            <td align="left" class="esd-block-text">
                                              <h3 style="font-size:17px">
                                                Download the app and enjoy purchases
                                              </h3>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                    <td width="20" class="es-hidden"></td>
                                  </tr>
                                </tbody>
                              </table>
                              <!--[if mso]></td><td width="133" valign="top"><![endif]-->
                              <table cellspacing="0" cellpadding="0" align="left" class="es-left">
                                <tbody>
                                  <tr>
                                    <td width="133" align="center" class="es-m-p20b esd-container-frame">
                                      <table width="100%" cellspacing="0" cellpadding="0">
                                        <tbody>
                                          <tr>
                                            <td align="center" class="esd-block-image" style="font-size:0">
                                              <a target="_blank" href="https://viewstripo.email/">
                                                <img src="https://frmakmc.stripocdn.email/content/guids/CABINET_e48ed8a1cdc6a86a71047ec89b3eabf6/images/92051534250512328.png" alt="App Store" title="App Store" width="133" class="adapt-img" style="display:block">
                                              </a>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <!--[if mso]></td><td width="20"></td><td width="133" valign="top"><![endif]-->
                              <table cellspacing="0" cellpadding="0" align="right" class="es-right">
                                <tbody>
                                  <tr>
                                    <td width="133" align="center" class="esd-container-frame">
                                      <table width="100%" cellspacing="0" cellpadding="0">
                                        <tbody>
                                          <tr>
                                            <td align="center" class="esd-block-image" style="font-size:0">
                                              <a target="_blank" href="https://viewstripo.email/">
                                                <img src="https://frmakmc.stripocdn.email/content/guids/CABINET_e48ed8a1cdc6a86a71047ec89b3eabf6/images/82871534250557673.png" alt="Google Play" title="Google Play" width="133" class="adapt-img" style="display:block">
                                              </a>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <!--[if mso]></td></tr></table><![endif]-->
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table cellspacing="0" cellpadding="0" align="center" class="es-content">
                <tbody>
                  <tr>
                    <td align="center" class="esd-stripe">
                      <table esd-img-prev-src width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" class="es-content-body" style="background-color:transparent">
                        <tbody>
                          <tr>
                            <td esd-img-prev-src align="left" class="esd-structure">
                              <table width="100%" cellspacing="0" cellpadding="0">
                                <tbody>
                                  <tr>
                                    <td width="600" valign="top" align="center" class="esd-container-frame">
                                      <table esd-img-prev-src width="100%" cellspacing="0" cellpadding="0" bgcolor="#fff4f7" style="background-color:rgb(255, 244, 247)">
                                        <tbody>
                                          <tr>
                                            <td align="center" class="esd-block-text es-p20t es-p5b es-p20r es-p20l">
                                              <h3>
                                                Let's get social
                                              </h3>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table cellspacing="0" cellpadding="0" align="center" class="es-content">
                <tbody>
                  <tr>
                    <td bgcolor="#666666" align="center" class="esd-stripe" style="background-color:rgb(102, 102, 102)">
                      <table esd-img-prev-src width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" class="es-content-body" style="background-color:transparent">
                        <tbody>
                          <tr>
                            <td esd-img-prev-src align="left" class="esd-structure">
                              <table width="100%" cellspacing="0" cellpadding="0">
                                <tbody>
                                  <tr>
                                    <td width="600" valign="top" align="center" class="esd-container-frame">
                                      <table esd-img-prev-src width="100%" cellspacing="0" cellpadding="0" bgcolor="#fff4f7" style="background-color:rgb(255, 244, 247);border-radius:3px;border-collapse:separate">
                                        <tbody>
                                          <tr>
                                            <td bgcolor="#fff4f7" align="center" class="esd-block-spacer es-p5t es-p5b es-p20r es-p20l" style="font-size:0">
                                              <table width="100%" height="100%" cellspacing="0" cellpadding="0" border="0">
                                                <tbody>
                                                  <tr>
                                                    <td style="border-bottom:1px solid rgb(255, 244, 247);background:rgba(0, 0, 0, 0) none repeat scroll 0% 0%;height:1px;width:100%;margin:0px"></td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td align="center" class="esd-block-social es-p5t es-p25b es-p20r es-p20l" style="font-size:0">
                                              <table cellspacing="0" cellpadding="0" class="es-table-not-adapt es-social">
                                                <tbody>
                                                  <tr>
                                                    <td valign="top" align="center" class="es-p10r">
                                                      <a target="_blank" href="https://viewstripo.email/">
                                                        <img title="Facebook" src="https://frmakmc.stripocdn.email/content/assets/img/social-icons/logo-black/facebook-logo-black.png" alt="Fb" width="32">
                                                      </a>
                                                    </td>
                                                    <td valign="top" align="center" class="es-p10r">
                                                      <a target="_blank" href="https://viewstripo.email/">
                                                        <img title="X" src="https://frmakmc.stripocdn.email/content/assets/img/social-icons/logo-black/x-logo-black.png" alt="X" width="32">
                                                      </a>
                                                    </td>
                                                    <td valign="top" align="center" class="es-p10r">
                                                      <a target="_blank" href="https://viewstripo.email/">
                                                        <img title="Instagram" src="https://frmakmc.stripocdn.email/content/assets/img/social-icons/logo-black/instagram-logo-black.png" alt="Inst" width="32">
                                                      </a>
                                                    </td>
                                                    <td valign="top" align="center" class="es-p10r">
                                                      <a target="_blank" href="https://viewstripo.email/">
                                                        <img title="Youtube" src="https://frmakmc.stripocdn.email/content/assets/img/social-icons/logo-black/youtube-logo-black.png" alt="Yt" width="32">
                                                      </a>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table cellpadding="0" cellspacing="0" align="center" class="es-footer">
                <tbody>
                  <tr>
                    <td bgcolor="#666666" align="center" class="esd-stripe" style="background-color:rgb(102, 102, 102)">
                      <table width="600" cellspacing="0" cellpadding="0" bgcolor="#666666" align="center" class="es-footer-body" style="background-color:rgb(102, 102, 102)">
                        <tbody>
                          <tr>
                            <td align="left" class="esd-structure es-p20t es-p20b es-p20r es-p20l">
                              <table width="100%" cellspacing="0" cellpadding="0">
                                <tbody>
                                  <tr>
                                    <td width="560" valign="top" align="center" class="esd-container-frame">
                                      <table width="100%" cellspacing="0" cellpadding="0">
                                        <tbody>
                                          <tr>
                                            <td esdev-links-color="#999999" align="center" class="esd-block-text">
                                              <p style="color:#ffffff">
                                                You are receiving this email because you asked us about regular newsletter.
                                              </p>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td align="center" class="esd-block-text es-p5b">
                                              <p style="color:#ffffff">
                                                You can <a target="_blank" href="" class="unsubscribe">unsubscribe</a> from these emails.
                                              </p>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td esdev-links-color="#999999" align="center" class="esd-block-text es-p5b">
                                              <p style="color:rgb(255, 255, 255)">
                                                8475 Michaigan Ave. Santa Monica, CA 90645, US
                                              </p>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table cellspacing="0" cellpadding="0" align="center" class="esd-footer-popover es-content">
                <tbody>
                  <tr>
                    <td bgcolor="#666666" align="center" class="esd-stripe" style="background-color:rgb(102, 102, 102)">
                      <table esd-img-prev-src width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" class="es-content-body" style="background-color:rgb(102, 102, 102)">
                        <tbody>
                          <tr>
                            <td esd-img-prev-src align="left" class="esd-structure es-p30t es-p30b es-p20r es-p20l">
                              <table width="100%" cellspacing="0" cellpadding="0">
                                <tbody>
                                  <tr>
                                    <td width="560" valign="top" align="center" class="esd-container-frame">
                                      <table width="100%" cellspacing="0" cellpadding="0">
                                        <tbody>
                                          <tr>
                                            <td align="center" class="esd-block-image es-infoblock made_with" style="font-size:0">
                                              <a target="_blank" href="https://viewstripo.email/?utm_source=templates&utm_medium=email&utm_campaign=dresses&utm_content=trigger_newsletter">
                                                <img src="https://frmakmc.stripocdn.email/content/guids/cab_pub_7cbbc409ec990f19c78c75bd1e06f215/images/78411525331495932.png" alt="" width="125" style="display:block">
                                              </a>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </body>
</html>`
