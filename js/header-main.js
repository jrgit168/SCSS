document.writeln(`
<div class="header-main">
<div class="header-right">
  <ul class="nofitications-dropdown">
    <li class="dropdown head-dpdn">
      　<a href="TeacherParent_manage.aspx">　　</a>　<a
        class="top_tooltip"
        style="cursor: pointer"
        href="OperateTeaching.aspx"
        ><img src="../img/images/e-learning_1.png" /><span
          class="tooltiptext"
          >系統操作教學</span
        ></a
      >　<a
        class="top_tooltip"
        style="cursor: pointer"
        onclick="go12345()"
        ><img src="../img/images/linkicon-4.png" /><span
          class="tooltiptext"
          >系統公告</span
        ></a
      >　<a
        class="top_tooltip"
        style="cursor: pointer"
        href="http://jrad.jretc.net/Login/Jretc2Kingway?schoolid=12&amp;usersno=100000020"
        ><img src="../img/images/linkicon-1.png" /><span
          class="tooltiptext"
          >教案平台</span
        ></a
      >　<a
        class="top_tooltip"
        style="cursor: pointer"
        onclick="go1234('SXWiJo8E8gY5AvVTKZXDsQ==')"
        ><img src="../img/images/linkicon-7.png" /><span
          class="tooltiptext"
          >存預存款</span
        ></a
      >　<a
        class="top_tooltip"
        style="cursor: pointer"
        href="http://www.jerri.online/OnlineEnroll?schoolid=12"
        ><img
          src="../img/images/OnlineEnroll.png"
          style="width: 35px; height: 25px"
        /><span class="tooltiptext">線上報名</span></a
      >
    </li>
  </ul>
  <div class="profile_details">
    <ul>
      <li class="dropdown profile_details_drop">
        <a
          href="#"
          class="dropdown-toggle"
          data-toggle="dropdown"
          aria-expanded="false"
        >
          <div class="profile_img">
            <div class="user-name">
              <p>張二峰 老師</p>
            </div>
            <i class="fa fa-angle-down lnr"></i>
            <i class="fa fa-angle-up lnr"></i>
            <div class="clearfix"></div>
          </div>
        </a>
        <ul class="dropdown-menu drp-mnu">
          <li>
            <a href="chg_pwd.aspx"
              ><i class="fa fa-key"></i>變更密碼</a
            >
          </li>
          <li>
            <a class="popup-with-zoom-anim" href="#small-dialog6"
              ><i class="fa fa-sign-out"></i>登出系統</a
            >
          </li>
        </ul>
      </li>
    </ul>
  </div>
</div>
<div id="popup">
  <div id="small-dialog6" class="mfp-hide">
    <div class="pop_up">
      <ul class="payment-online-form-left">
        <h4>&nbsp;</h4>

        <div class="inbox-details-body">
          <h4 class="popwd1">是否確認登出</h4>
          <ul class="payment-sendbtns">
            <li>
              <a href="" class="cancel" title="Close (Esc)"
                >取消</a
              >
            </li>
            <li>
              <a href="../login_out.aspx" class="order">確定</a>
            </li>
          </ul>
        </div>

        <table
          class="table table-striped table-bordered table-hover"
        >
          <thead></thead>
        </table>
        <div class="clear"></div>
      </ul>
    </div>
  </div>
</div>
</div>
`);