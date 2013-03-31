  


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>color-thief/js/color-thief.js at master · lokesh/color-thief</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="http://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="c++sYS1bnKq6yBzZk/rBHjTyFLHUXKX5a1g1D3DqNSA=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/assets/github-f70e4783e00fd4884a9e5e651a43933c9881caa8.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://a248.e.akamai.net/assets.github.com/assets/github2-0d31290d073dea4d8671e2b8c747629aeb074034.css" media="all" rel="stylesheet" type="text/css" />
    


      <script src="https://a248.e.akamai.net/assets.github.com/assets/frameworks-d76b58e749b52bc47a4c46620bf2c320fabe5248.js" type="text/javascript"></script>
      <script src="https://a248.e.akamai.net/assets.github.com/assets/github-67b55380cff8d6766b298e6935a3c1db7d5c6d5d.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="1212ad79754350a805cefbcd08a3dadf">

        <link data-pjax-transient rel='permalink' href='/lokesh/color-thief/blob/681cfe8b0d7233b80fa7d8f5d36dc9a96ed94a2c/js/color-thief.js'>
    <meta property="og:title" content="color-thief"/>
    <meta property="og:type" content="githubog:gitrepository"/>
    <meta property="og:url" content="https://github.com/lokesh/color-thief"/>
    <meta property="og:image" content="https://secure.gravatar.com/avatar/ecd55d99e4dfa947193fea015f64fa56?s=420&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"/>
    <meta property="og:site_name" content="GitHub"/>
    <meta property="og:description" content="color-thief - Grabs the dominant color or a representative color palette from an image. Uses javascript and canvas."/>
    <meta property="twitter:card" content="summary"/>
    <meta property="twitter:site" content="@GitHub">
    <meta property="twitter:title" content="lokesh/color-thief"/>

    <meta name="description" content="color-thief - Grabs the dominant color or a representative color palette from an image. Uses javascript and canvas." />

  <link href="https://github.com/lokesh/color-thief/commits/master.atom" rel="alternate" title="Recent Commits to color-thief:master" type="application/atom+xml" />

  </head>


  <body class="logged_in page-blob macintosh vis-public env-production  ">
    <div id="wrapper">

      

      
      
      

      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-blacktocat" href="https://github.com/">
  <span class="mega-icon mega-icon-blacktocat"></span>
</a>

    <div class="divider-vertical"></div>

      <a href="/notifications" class="notification-indicator tooltipped downwards" title="You have no unread notifications">
    <span class="mail-status all-read"></span>
  </a>
  <div class="divider-vertical"></div>


      <div class="command-bar js-command-bar  ">
            <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">
  <a href="/search/advanced" class="advanced-search-icon tooltipped downwards command-bar-search" id="advanced_search" title="Advanced search"><span class="mini-icon mini-icon-advanced-search "></span></a>

  <input type="text" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" data-username="blotmandroid" autocapitalize="off">

  <span class="mini-icon help tooltipped downwards" title="Show command bar help">
    <span class="mini-icon mini-icon-help"></span>
  </span>

  <input type="hidden" name="ref" value="commandbar">

  <div class="divider-vertical"></div>
</form>
        <ul class="top-nav">
            <li class="explore"><a href="https://github.com/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="http://help.github.com">Help</a></li>
        </ul>
      </div>

    

  
    <ul id="user-links">
      <li>
        <a href="https://github.com/blotmandroid" class="name">
          <img height="20" src="https://secure.gravatar.com/avatar/13e08cd3a074d646962a51c025fe2243?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /> blotmandroid
        </a>
      </li>
      <li>
        <a href="/new" id="new_repo" class="tooltipped downwards" title="Create a new repo">
          <span class="mini-icon mini-icon-create"></span>
        </a>
      </li>
      <li>
        <a href="/settings/profile" id="account_settings"
          class="tooltipped downwards"
          title="Account settings ">
          <span class="mini-icon mini-icon-account-settings"></span>
        </a>
      </li>
      <li>
        <a href="/logout" data-method="post" id="logout" class="tooltipped downwards" title="Sign out">
          <span class="mini-icon mini-icon-logout"></span>
        </a>
      </li>
    </ul>



    
  </div>
</div>

      

      

      


            <div class="site hfeed" itemscope itemtype="http://schema.org/WebPage">
      <div class="hentry">
        
        <div class="pagehead repohead instapaper_ignore readability-menu ">
          <div class="container">
            <div class="title-actions-bar">
              


<ul class="pagehead-actions">


    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="c++sYS1bnKq6yBzZk/rBHjTyFLHUXKX5a1g1D3DqNSA=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="2688455" />

    <div class="select-menu js-menu-container js-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">
          <span class="mini-icon mini-icon-watching"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder js-menu-content">
        <div class="select-menu-modal">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="mini-icon mini-icon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container">

            <div class="select-menu-item js-navigation-item js-navigation-target selected">
              <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for discussions in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="mini-icon mini-icon-watching"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item js-navigation-target ">
              <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="mini-icon mini-icon-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item js-navigation-target ">
              <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="mini-icon mini-icon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

    <li class="js-toggler-container js-social-container starring-container on">
      <a href="/lokesh/color-thief/unstar" class="minibutton js-toggler-target star-button starred upwards" title="Unstar this repo" data-remote="true" data-method="post" rel="nofollow">
        <span class="mini-icon mini-icon-remove-star"></span>
        <span class="text">Unstar</span>
      </a>
      <a href="/lokesh/color-thief/star" class="minibutton js-toggler-target star-button unstarred upwards" title="Star this repo" data-remote="true" data-method="post" rel="nofollow">
        <span class="mini-icon mini-icon-star"></span>
        <span class="text">Star</span>
      </a>
      <a class="social-count js-social-count" href="/lokesh/color-thief/stargazers">1,058</a>
    </li>

        <li>
          <a href="/lokesh/color-thief/fork" class="minibutton js-toggler-target fork-button lighter upwards" title="Fork this repo" rel="nofollow" data-method="post">
            <span class="mini-icon mini-icon-branch-create"></span>
            <span class="text">Fork</span>
          </a>
          <a href="/lokesh/color-thief/network" class="social-count">118</a>
        </li>


</ul>

              <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
                <span class="repo-label"><span>public</span></span>
                <span class="mega-icon mega-icon-public-repo"></span>
                <span class="author vcard">
                  <a href="/lokesh" class="url fn" itemprop="url" rel="author">
                  <span itemprop="title">lokesh</span>
                  </a></span> /
                <strong><a href="/lokesh/color-thief" class="js-current-repository">color-thief</a></strong>
              </h1>
            </div>

            
  <ul class="tabs">
    <li><a href="/lokesh/color-thief" class="selected" highlight="repo_source repo_downloads repo_commits repo_tags repo_branches">Code</a></li>
    <li><a href="/lokesh/color-thief/network" highlight="repo_network">Network</a></li>
    <li><a href="/lokesh/color-thief/pulls" highlight="repo_pulls">Pull Requests <span class='counter'>1</span></a></li>

      <li><a href="/lokesh/color-thief/issues" highlight="repo_issues">Issues <span class='counter'>5</span></a></li>



    <li><a href="/lokesh/color-thief/graphs" highlight="repo_graphs repo_contributors">Graphs</a></li>


  </ul>
  
<div class="tabnav">

  <span class="tabnav-right">
    <ul class="tabnav-tabs">
          <li><a href="/lokesh/color-thief/tags" class="tabnav-tab" highlight="repo_tags">Tags <span class="counter ">2</span></a></li>
    </ul>
    
  </span>

  <div class="tabnav-widget scope">


    <div class="select-menu js-menu-container js-select-menu js-branch-menu">
      <a class="minibutton select-menu-button js-menu-target" data-hotkey="w" data-ref="master">
        <span class="mini-icon mini-icon-branch"></span>
        <i>branch:</i>
        <span class="js-select-button">master</span>
      </a>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">

        <div class="select-menu-modal">
          <div class="select-menu-header">
            <span class="select-menu-title">Switch branches/tags</span>
            <span class="mini-icon mini-icon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-filters">
            <div class="select-menu-text-filter">
              <input type="text" id="commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
            </div>
            <div class="select-menu-tabs">
              <ul>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
                </li>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
                </li>
              </ul>
            </div><!-- /.select-menu-tabs -->
          </div><!-- /.select-menu-filters -->

          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="branches">

            <div data-filterable-for="commitish-filter-field" data-filterable-type="substring">

                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/lokesh/color-thief/blob/dev/js/color-thief.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="dev" rel="nofollow" title="dev">dev</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target selected">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/lokesh/color-thief/blob/master/js/color-thief.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="master" rel="nofollow" title="master">master</a>
                </div> <!-- /.select-menu-item -->
            </div>

              <div class="select-menu-no-results">Nothing to show</div>
          </div> <!-- /.select-menu-list -->


          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="tags">
            <div data-filterable-for="commitish-filter-field" data-filterable-type="substring">

                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/lokesh/color-thief/blob/v1.0/js/color-thief.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.0" rel="nofollow" title="v1.0">v1.0</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/lokesh/color-thief/blob/1.0/js/color-thief.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.0" rel="nofollow" title="1.0">1.0</a>
                </div> <!-- /.select-menu-item -->
            </div>

            <div class="select-menu-no-results">Nothing to show</div>

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

  </div> <!-- /.scope -->

  <ul class="tabnav-tabs">
    <li><a href="/lokesh/color-thief" class="selected tabnav-tab" highlight="repo_source">Files</a></li>
    <li><a href="/lokesh/color-thief/commits/master" class="tabnav-tab" highlight="repo_commits">Commits</a></li>
    <li><a href="/lokesh/color-thief/branches" class="tabnav-tab" highlight="repo_branches" rel="nofollow">Branches <span class="counter ">2</span></a></li>
  </ul>

</div>

  
  
  


            
          </div>
        </div><!-- /.repohead -->

        <div id="js-repo-pjax-container" class="container context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:ad397b11742b02a43eb501788a4692db -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:ad397b11742b02a43eb501788a4692db -->


<div id="slider">
    <div class="frame-meta">

      <p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

        <div class="breadcrumb">
          <span class='bold'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/lokesh/color-thief" class="js-slide-to" data-branch="master" data-direction="back" itemscope="url"><span itemprop="title">color-thief</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/lokesh/color-thief/tree/master/js" class="js-slide-to" data-branch="master" data-direction="back" itemscope="url"><span itemprop="title">js</span></a></span><span class="separator"> / </span><strong class="final-path">color-thief.js</strong> <span class="js-zeroclipboard zeroclipboard-button" data-clipboard-text="js/color-thief.js" data-copied-hint="copied!" title="copy to clipboard"><span class="mini-icon mini-icon-clipboard"></span></span>
        </div>

      <a href="/lokesh/color-thief/find/master" class="js-slide-to" data-hotkey="t" style="display:none">Show File Finder</a>


        
  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://secure.gravatar.com/avatar/ecd55d99e4dfa947193fea015f64fa56?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
    <span class="author"><a href="/lokesh" rel="author">lokesh</a></span>
    <time class="js-relative-date" datetime="2012-04-23T14:14:06-07:00" title="2012-04-23 14:14:06">April 23, 2012</time>
    <div class="commit-title">
        <a href="/lokesh/color-thief/commit/d6181e84cc42a015751beacb5b004e81914e3c9a" class="message">js file had incorrect script name at top</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>2</strong> contributors</a></p>
          <a class="avatar tooltipped downwards" title="lokesh" href="/lokesh/color-thief/commits/master/js/color-thief.js?author=lokesh"><img height="20" src="https://secure.gravatar.com/avatar/ecd55d99e4dfa947193fea015f64fa56?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="michaelhart" href="/lokesh/color-thief/commits/master/js/color-thief.js?author=michaelhart"><img height="20" src="https://secure.gravatar.com/avatar/8d22c9d38a538fb33cabef987aeca5b7?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2>Users on GitHub who have contributed to this file</h2>
      <ul class="facebox-user-list">
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/ecd55d99e4dfa947193fea015f64fa56?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/lokesh">lokesh</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/8d22c9d38a538fb33cabef987aeca5b7?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/michaelhart">michaelhart</a>
        </li>
      </ul>
    </div>
  </div>


    </div><!-- ./.frame-meta -->

    <div class="frames">
      <div class="frame" data-permalink-url="/lokesh/color-thief/blob/681cfe8b0d7233b80fa7d8f5d36dc9a96ed94a2c/js/color-thief.js" data-title="color-thief/js/color-thief.js at master · lokesh/color-thief · GitHub" data-type="blob">

        <div id="files" class="bubble">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><b class="mini-icon mini-icon-text-file"></b></span>
                <span class="mode" title="File Mode">file</span>
                  <span>229 lines (185 sloc)</span>
                <span>6.652 kb</span>
              </div>
              <div class="actions">
                <div class="button-group">
                        <a class="minibutton tooltipped leftwards"
                           title="Clicking this button will automatically fork this project so you can edit the file"
                           href="/lokesh/color-thief/edit/master/js/color-thief.js"
                           data-method="post" rel="nofollow">Edit</a>
                  <a href="/lokesh/color-thief/raw/master/js/color-thief.js" class="button minibutton " id="raw-url">Raw</a>
                    <a href="/lokesh/color-thief/blame/master/js/color-thief.js" class="button minibutton ">Blame</a>
                  <a href="/lokesh/color-thief/commits/master/js/color-thief.js" class="button minibutton " rel="nofollow">History</a>
                </div><!-- /.button-group -->
              </div><!-- /.actions -->

            </div>
                <div class="data type-javascript js-blob-data">
      <table cellpadding="0" cellspacing="0" class="lines">
        <tr>
          <td>
            <pre class="line_numbers"><span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
</pre>
          </td>
          <td width="100%">
                  <div class="highlight"><pre><div class='line' id='LC1'><span class="cm">/*</span></div><div class='line' id='LC2'><span class="cm"> * Color Thief v1.0</span></div><div class='line' id='LC3'><span class="cm"> * by Lokesh Dhakar - http://www.lokeshdhakar.com</span></div><div class='line' id='LC4'><span class="cm"> *</span></div><div class='line' id='LC5'><span class="cm"> * Licensed under the Creative Commons Attribution 2.5 License - http://creativecommons.org/licenses/by/2.5/</span></div><div class='line' id='LC6'><span class="cm"> *</span></div><div class='line' id='LC7'><span class="cm"> * # Thanks</span></div><div class='line' id='LC8'><span class="cm"> * Nick Rabinowitz: Created quantize.js which is used by the median cut palette function. This handles all the hard clustering math.</span></div><div class='line' id='LC9'><span class="cm"> * John Schulz: All around mad genius who helped clean and optimize the code. @JFSIII</span></div><div class='line' id='LC10'><span class="cm"> *</span></div><div class='line' id='LC11'><span class="cm"> * ## Classes</span></div><div class='line' id='LC12'><span class="cm"> * CanvasImage</span></div><div class='line' id='LC13'><span class="cm"> * ## Functions</span></div><div class='line' id='LC14'><span class="cm"> * getDominantColor()</span></div><div class='line' id='LC15'><span class="cm"> * createPalette()</span></div><div class='line' id='LC16'><span class="cm"> * getAverageRGB()</span></div><div class='line' id='LC17'><span class="cm"> * createAreaBasedPalette()</span></div><div class='line' id='LC18'><span class="cm"> *</span></div><div class='line' id='LC19'><span class="cm"> * Requires jquery and quantize.js.</span></div><div class='line' id='LC20'><span class="cm"> */</span></div><div class='line' id='LC21'><br/></div><div class='line' id='LC22'><br/></div><div class='line' id='LC23'><span class="cm">/*</span></div><div class='line' id='LC24'><span class="cm">  CanvasImage Class</span></div><div class='line' id='LC25'><span class="cm">  Class that wraps the html image element and canvas.</span></div><div class='line' id='LC26'><span class="cm">  It also simplifies some of the canvas context manipulation</span></div><div class='line' id='LC27'><span class="cm">  with a set of helper functions.</span></div><div class='line' id='LC28'><span class="cm">*/</span></div><div class='line' id='LC29'><span class="kd">var</span> <span class="nx">CanvasImage</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">image</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC30'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// If jquery object is passed in, get html element</span></div><div class='line' id='LC31'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">imgEl</span> <span class="o">=</span> <span class="p">(</span><span class="nx">image</span><span class="p">.</span><span class="nx">jquery</span><span class="p">)</span> <span class="o">?</span> <span class="nx">image</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">:</span> <span class="nx">image</span><span class="p">;</span></div><div class='line' id='LC32'><br/></div><div class='line' id='LC33'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">canvas</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s1">&#39;canvas&#39;</span><span class="p">);</span></div><div class='line' id='LC34'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">context</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">canvas</span><span class="p">.</span><span class="nx">getContext</span><span class="p">(</span><span class="s1">&#39;2d&#39;</span><span class="p">);</span></div><div class='line' id='LC35'><br/></div><div class='line' id='LC36'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">document</span><span class="p">.</span><span class="nx">body</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">canvas</span><span class="p">);</span></div><div class='line' id='LC37'><br/></div><div class='line' id='LC38'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">width</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">canvas</span><span class="p">.</span><span class="nx">width</span> <span class="o">=</span> <span class="nx">imgEl</span><span class="p">.</span><span class="nx">width</span><span class="p">;</span></div><div class='line' id='LC39'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">height</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">canvas</span><span class="p">.</span><span class="nx">height</span> <span class="o">=</span> <span class="nx">imgEl</span><span class="p">.</span><span class="nx">height</span><span class="p">;</span></div><div class='line' id='LC40'><br/></div><div class='line' id='LC41'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">context</span><span class="p">.</span><span class="nx">drawImage</span><span class="p">(</span><span class="nx">imgEl</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">width</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">height</span><span class="p">);</span></div><div class='line' id='LC42'><span class="p">};</span></div><div class='line' id='LC43'><br/></div><div class='line' id='LC44'><span class="nx">CanvasImage</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">clear</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC45'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">context</span><span class="p">.</span><span class="nx">clearRect</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">width</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">height</span><span class="p">);</span></div><div class='line' id='LC46'><span class="p">};</span></div><div class='line' id='LC47'><br/></div><div class='line' id='LC48'><span class="nx">CanvasImage</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">update</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">imageData</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC49'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">context</span><span class="p">.</span><span class="nx">putImageData</span><span class="p">(</span><span class="nx">imageData</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC50'><span class="p">};</span></div><div class='line' id='LC51'><br/></div><div class='line' id='LC52'><span class="nx">CanvasImage</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">getPixelCount</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC53'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">width</span> <span class="o">*</span> <span class="k">this</span><span class="p">.</span><span class="nx">height</span><span class="p">;</span></div><div class='line' id='LC54'><span class="p">};</span></div><div class='line' id='LC55'><br/></div><div class='line' id='LC56'><span class="nx">CanvasImage</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">getImageData</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC57'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">context</span><span class="p">.</span><span class="nx">getImageData</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">width</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">height</span><span class="p">);</span></div><div class='line' id='LC58'><span class="p">};</span></div><div class='line' id='LC59'><br/></div><div class='line' id='LC60'><span class="nx">CanvasImage</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">removeCanvas</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC61'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">canvas</span><span class="p">).</span><span class="nx">remove</span><span class="p">();</span></div><div class='line' id='LC62'><span class="p">};</span></div><div class='line' id='LC63'><br/></div><div class='line' id='LC64'><br/></div><div class='line' id='LC65'><span class="cm">/*</span></div><div class='line' id='LC66'><span class="cm"> * getDominantColor(sourceImage)</span></div><div class='line' id='LC67'><span class="cm"> * returns {r: num, g: num, b: num}</span></div><div class='line' id='LC68'><span class="cm"> *</span></div><div class='line' id='LC69'><span class="cm"> * Use the median cut algorithm provided by quantize.js to cluster similar</span></div><div class='line' id='LC70'><span class="cm"> * colors and return the base color from the largest cluster. */</span></div><div class='line' id='LC71'><span class="kd">function</span> <span class="nx">getDominantColor</span><span class="p">(</span><span class="nx">sourceImage</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC72'><br/></div><div class='line' id='LC73'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">palette</span> <span class="o">=</span> <span class="nx">createPalette</span><span class="p">(</span><span class="nx">sourceImage</span><span class="p">,</span> <span class="mi">5</span><span class="p">);</span></div><div class='line' id='LC74'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">dominant</span> <span class="o">=</span> <span class="nx">palette</span><span class="p">[</span><span class="mi">0</span><span class="p">];</span></div><div class='line' id='LC75'><br/></div><div class='line' id='LC76'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">dominant</span><span class="p">;</span></div><div class='line' id='LC77'><span class="p">}</span></div><div class='line' id='LC78'><br/></div><div class='line' id='LC79'><br/></div><div class='line' id='LC80'><span class="cm">/*</span></div><div class='line' id='LC81'><span class="cm"> * createPalette(sourceImage, colorCount)</span></div><div class='line' id='LC82'><span class="cm"> * returns array[ {r: num, g: num, b: num}, {r: num, g: num, b: num}, ...]</span></div><div class='line' id='LC83'><span class="cm"> *</span></div><div class='line' id='LC84'><span class="cm"> * Use the median cut algorithm provided by quantize.js to cluster similar</span></div><div class='line' id='LC85'><span class="cm"> * colors.</span></div><div class='line' id='LC86'><span class="cm"> *</span></div><div class='line' id='LC87'><span class="cm"> * BUGGY: Function does not always return the requested amount of colors. It can be +/- 2.</span></div><div class='line' id='LC88'><span class="cm"> */</span></div><div class='line' id='LC89'><span class="kd">function</span> <span class="nx">createPalette</span><span class="p">(</span><span class="nx">sourceImage</span><span class="p">,</span> <span class="nx">colorCount</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC90'><br/></div><div class='line' id='LC91'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Create custom CanvasImage object</span></div><div class='line' id='LC92'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">image</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">CanvasImage</span><span class="p">(</span><span class="nx">sourceImage</span><span class="p">),</span></div><div class='line' id='LC93'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">imageData</span> <span class="o">=</span> <span class="nx">image</span><span class="p">.</span><span class="nx">getImageData</span><span class="p">(),</span></div><div class='line' id='LC94'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">pixels</span> <span class="o">=</span> <span class="nx">imageData</span><span class="p">.</span><span class="nx">data</span><span class="p">,</span></div><div class='line' id='LC95'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">pixelCount</span> <span class="o">=</span> <span class="nx">image</span><span class="p">.</span><span class="nx">getPixelCount</span><span class="p">();</span></div><div class='line' id='LC96'><br/></div><div class='line' id='LC97'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Store the RGB values in an array format suitable for quantize function</span></div><div class='line' id='LC98'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">pixelArray</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC99'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">offset</span><span class="p">,</span> <span class="nx">r</span><span class="p">,</span> <span class="nx">g</span><span class="p">,</span> <span class="nx">b</span><span class="p">,</span> <span class="nx">a</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">pixelCount</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC100'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">offset</span> <span class="o">=</span> <span class="nx">i</span> <span class="o">*</span> <span class="mi">4</span><span class="p">;</span></div><div class='line' id='LC101'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">r</span> <span class="o">=</span> <span class="nx">pixels</span><span class="p">[</span><span class="nx">offset</span> <span class="o">+</span> <span class="mi">0</span><span class="p">];</span></div><div class='line' id='LC102'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">g</span> <span class="o">=</span> <span class="nx">pixels</span><span class="p">[</span><span class="nx">offset</span> <span class="o">+</span> <span class="mi">1</span><span class="p">];</span></div><div class='line' id='LC103'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">b</span> <span class="o">=</span> <span class="nx">pixels</span><span class="p">[</span><span class="nx">offset</span> <span class="o">+</span> <span class="mi">2</span><span class="p">];</span></div><div class='line' id='LC104'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">a</span> <span class="o">=</span> <span class="nx">pixels</span><span class="p">[</span><span class="nx">offset</span> <span class="o">+</span> <span class="mi">3</span><span class="p">];</span></div><div class='line' id='LC105'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// If pixel is mostly opaque and not white</span></div><div class='line' id='LC106'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">a</span> <span class="o">&gt;=</span> <span class="mi">125</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC107'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="p">(</span><span class="nx">r</span> <span class="o">&gt;</span> <span class="mi">250</span> <span class="o">&amp;&amp;</span> <span class="nx">g</span> <span class="o">&gt;</span> <span class="mi">250</span> <span class="o">&amp;&amp;</span> <span class="nx">b</span> <span class="o">&gt;</span> <span class="mi">250</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC108'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">pixelArray</span><span class="p">.</span><span class="nx">push</span><span class="p">([</span><span class="nx">r</span><span class="p">,</span> <span class="nx">g</span><span class="p">,</span> <span class="nx">b</span><span class="p">]);</span></div><div class='line' id='LC109'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC110'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC111'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC112'><br/></div><div class='line' id='LC113'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Send array to quantize function which clusters values</span></div><div class='line' id='LC114'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// using median cut algorithm</span></div><div class='line' id='LC115'><br/></div><div class='line' id='LC116'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">cmap</span> <span class="o">=</span> <span class="nx">MMCQ</span><span class="p">.</span><span class="nx">quantize</span><span class="p">(</span><span class="nx">pixelArray</span><span class="p">,</span> <span class="nx">colorCount</span><span class="p">);</span></div><div class='line' id='LC117'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">palette</span> <span class="o">=</span> <span class="nx">cmap</span><span class="p">.</span><span class="nx">palette</span><span class="p">();</span></div><div class='line' id='LC118'><br/></div><div class='line' id='LC119'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Clean up</span></div><div class='line' id='LC120'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">image</span><span class="p">.</span><span class="nx">removeCanvas</span><span class="p">();</span></div><div class='line' id='LC121'><br/></div><div class='line' id='LC122'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">palette</span><span class="p">;</span></div><div class='line' id='LC123'><br/></div><div class='line' id='LC124'><span class="p">}</span></div><div class='line' id='LC125'><br/></div><div class='line' id='LC126'><br/></div><div class='line' id='LC127'><span class="cm">/*</span></div><div class='line' id='LC128'><span class="cm"> * getAverageRGB(sourceImage)</span></div><div class='line' id='LC129'><span class="cm"> * returns {r: num, g: num, b: num}</span></div><div class='line' id='LC130'><span class="cm"> *</span></div><div class='line' id='LC131'><span class="cm"> * Add up all pixels RGB values and return average.</span></div><div class='line' id='LC132'><span class="cm"> * Tends to return muddy gray/brown color. Most likely, you&#39;ll be better</span></div><div class='line' id='LC133'><span class="cm"> * off using getDominantColor() instead.</span></div><div class='line' id='LC134'><span class="cm"> */</span></div><div class='line' id='LC135'><span class="kd">function</span> <span class="nx">getAverageRGB</span><span class="p">(</span><span class="nx">sourceImage</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC136'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Config</span></div><div class='line' id='LC137'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">sampleSize</span> <span class="o">=</span> <span class="mi">10</span><span class="p">;</span></div><div class='line' id='LC138'><br/></div><div class='line' id='LC139'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Create custom CanvasImage object</span></div><div class='line' id='LC140'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">image</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">CanvasImage</span><span class="p">(</span><span class="nx">sourceImage</span><span class="p">),</span></div><div class='line' id='LC141'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">imageData</span> <span class="o">=</span> <span class="nx">image</span><span class="p">.</span><span class="nx">getImageData</span><span class="p">(),</span></div><div class='line' id='LC142'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">pixels</span> <span class="o">=</span> <span class="nx">imageData</span><span class="p">.</span><span class="nx">data</span><span class="p">,</span></div><div class='line' id='LC143'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">pixelCount</span> <span class="o">=</span> <span class="nx">image</span><span class="p">.</span><span class="nx">getPixelCount</span><span class="p">();</span></div><div class='line' id='LC144'><br/></div><div class='line' id='LC145'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Reset vars</span></div><div class='line' id='LC146'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC147'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">count</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC148'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">rgb</span> <span class="o">=</span> <span class="p">{</span><span class="nx">r</span><span class="o">:</span><span class="mi">0</span><span class="p">,</span> <span class="nx">g</span><span class="o">:</span><span class="mi">0</span><span class="p">,</span> <span class="nx">b</span><span class="o">:</span><span class="mi">0</span><span class="p">};</span></div><div class='line' id='LC149'><br/></div><div class='line' id='LC150'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Loop through every # pixels. (# is set in Config above via the blockSize var)</span></div><div class='line' id='LC151'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Add all the red values together, repeat for blue and green.</span></div><div class='line' id='LC152'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Last step, divide by the number of pixels checked to get average.</span></div><div class='line' id='LC153'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">while</span> <span class="p">(</span> <span class="p">(</span><span class="nx">i</span> <span class="o">+=</span> <span class="nx">sampleSize</span> <span class="o">*</span> <span class="mi">4</span><span class="p">)</span> <span class="o">&lt;</span> <span class="nx">pixelCount</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC154'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// if pixel is mostly opaque</span></div><div class='line' id='LC155'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">pixels</span><span class="p">[</span><span class="nx">i</span><span class="o">+</span><span class="mi">3</span><span class="p">]</span> <span class="o">&gt;</span> <span class="mi">125</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC156'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">++</span><span class="nx">count</span><span class="p">;</span></div><div class='line' id='LC157'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">rgb</span><span class="p">.</span><span class="nx">r</span> <span class="o">+=</span> <span class="nx">pixels</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></div><div class='line' id='LC158'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">rgb</span><span class="p">.</span><span class="nx">g</span> <span class="o">+=</span> <span class="nx">pixels</span><span class="p">[</span><span class="nx">i</span><span class="o">+</span><span class="mi">1</span><span class="p">];</span></div><div class='line' id='LC159'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">rgb</span><span class="p">.</span><span class="nx">b</span> <span class="o">+=</span> <span class="nx">pixels</span><span class="p">[</span><span class="nx">i</span><span class="o">+</span><span class="mi">2</span><span class="p">];</span></div><div class='line' id='LC160'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC161'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC162'><br/></div><div class='line' id='LC163'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">rgb</span><span class="p">.</span><span class="nx">r</span> <span class="o">=</span> <span class="o">~~</span><span class="p">(</span><span class="nx">rgb</span><span class="p">.</span><span class="nx">r</span><span class="o">/</span><span class="nx">count</span><span class="p">);</span></div><div class='line' id='LC164'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">rgb</span><span class="p">.</span><span class="nx">g</span> <span class="o">=</span> <span class="o">~~</span><span class="p">(</span><span class="nx">rgb</span><span class="p">.</span><span class="nx">g</span><span class="o">/</span><span class="nx">count</span><span class="p">);</span></div><div class='line' id='LC165'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">rgb</span><span class="p">.</span><span class="nx">b</span> <span class="o">=</span> <span class="o">~~</span><span class="p">(</span><span class="nx">rgb</span><span class="p">.</span><span class="nx">b</span><span class="o">/</span><span class="nx">count</span><span class="p">);</span></div><div class='line' id='LC166'><br/></div><div class='line' id='LC167'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">rgb</span><span class="p">;</span></div><div class='line' id='LC168'><span class="p">}</span></div><div class='line' id='LC169'><br/></div><div class='line' id='LC170'><br/></div><div class='line' id='LC171'><span class="cm">/*</span></div><div class='line' id='LC172'><span class="cm"> * createAreaBasedPalette(sourceImage, colorCount)</span></div><div class='line' id='LC173'><span class="cm"> * returns array[ {r: num, g: num, b: num}, {r: num, g: num, b: num}, ...]</span></div><div class='line' id='LC174'><span class="cm"> *</span></div><div class='line' id='LC175'><span class="cm"> * Break the image into sections. Loops through pixel RGBS in the section and average color.</span></div><div class='line' id='LC176'><span class="cm"> * Tends to return muddy gray/brown color. You&#39;re most likely better off using createPalette().</span></div><div class='line' id='LC177'><span class="cm"> *</span></div><div class='line' id='LC178'><span class="cm"> * BUGGY: Function does not always return the requested amount of colors. It can be +/- 2.</span></div><div class='line' id='LC179'><span class="cm"> *</span></div><div class='line' id='LC180'><span class="cm"> */</span></div><div class='line' id='LC181'><span class="kd">function</span> <span class="nx">createAreaBasedPalette</span><span class="p">(</span><span class="nx">sourceImage</span><span class="p">,</span> <span class="nx">colorCount</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC182'><br/></div><div class='line' id='LC183'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">palette</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC184'><br/></div><div class='line' id='LC185'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Create custom CanvasImage object</span></div><div class='line' id='LC186'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">image</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">CanvasImage</span><span class="p">(</span><span class="nx">sourceImage</span><span class="p">),</span></div><div class='line' id='LC187'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">imageData</span> <span class="o">=</span> <span class="nx">image</span><span class="p">.</span><span class="nx">getImageData</span><span class="p">(),</span></div><div class='line' id='LC188'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">pixels</span> <span class="o">=</span> <span class="nx">imageData</span><span class="p">.</span><span class="nx">data</span><span class="p">,</span></div><div class='line' id='LC189'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">pixelCount</span> <span class="o">=</span> <span class="nx">image</span><span class="p">.</span><span class="nx">getPixelCount</span><span class="p">();</span></div><div class='line' id='LC190'><br/></div><div class='line' id='LC191'><br/></div><div class='line' id='LC192'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// How big a pixel area does each palette color get</span></div><div class='line' id='LC193'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">rowCount</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">round</span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">sqrt</span><span class="p">(</span><span class="nx">colorCount</span><span class="p">)),</span></div><div class='line' id='LC194'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">colCount</span> <span class="o">=</span> <span class="nx">rowCount</span><span class="p">,</span></div><div class='line' id='LC195'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">colWidth</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">round</span><span class="p">(</span><span class="nx">image</span><span class="p">.</span><span class="nx">width</span> <span class="o">/</span> <span class="nx">colCount</span><span class="p">),</span></div><div class='line' id='LC196'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">rowHeight</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">round</span><span class="p">(</span><span class="nx">image</span><span class="p">.</span><span class="nx">height</span> <span class="o">/</span> <span class="nx">rowCount</span><span class="p">);</span></div><div class='line' id='LC197'><br/></div><div class='line' id='LC198'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Loop through pixels section by section.</span></div><div class='line' id='LC199'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// At the end of each section, push the average rgb color to palette array.</span></div><div class='line' id='LC200'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">vertOffset</span><span class="p">;</span> <span class="nx">i</span><span class="o">&lt;</span><span class="nx">rowCount</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC201'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">vertOffset</span> <span class="o">=</span> <span class="nx">i</span> <span class="o">*</span> <span class="nx">rowHeight</span> <span class="o">*</span> <span class="nx">image</span><span class="p">.</span><span class="nx">width</span> <span class="o">*</span> <span class="mi">4</span><span class="p">;</span></div><div class='line' id='LC202'><br/></div><div class='line' id='LC203'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">j</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">horizOffset</span><span class="p">,</span> <span class="nx">rgb</span><span class="p">,</span> <span class="nx">count</span><span class="p">;</span> <span class="nx">j</span><span class="o">&lt;</span><span class="nx">colCount</span><span class="p">;</span> <span class="nx">j</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC204'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">horizOffset</span> <span class="o">=</span> <span class="nx">j</span> <span class="o">*</span> <span class="nx">colWidth</span> <span class="o">*</span> <span class="mi">4</span><span class="p">;</span></div><div class='line' id='LC205'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">rgb</span> <span class="o">=</span> <span class="p">{</span><span class="nx">r</span><span class="o">:</span><span class="mi">0</span><span class="p">,</span> <span class="nx">g</span><span class="o">:</span><span class="mi">0</span><span class="p">,</span> <span class="nx">b</span><span class="o">:</span><span class="mi">0</span><span class="p">};</span></div><div class='line' id='LC206'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">count</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC207'><br/></div><div class='line' id='LC208'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">k</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">rowOffset</span><span class="p">;</span> <span class="nx">k</span> <span class="o">&lt;</span> <span class="nx">rowHeight</span><span class="p">;</span> <span class="nx">k</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC209'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">rowOffset</span> <span class="o">=</span> <span class="nx">k</span> <span class="o">*</span> <span class="nx">image</span><span class="p">.</span><span class="nx">width</span> <span class="o">*</span> <span class="mi">4</span><span class="p">;</span></div><div class='line' id='LC210'><br/></div><div class='line' id='LC211'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">l</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">offset</span><span class="p">;</span> <span class="nx">l</span> <span class="o">&lt;</span> <span class="nx">colWidth</span><span class="p">;</span> <span class="nx">l</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC212'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">offset</span> <span class="o">=</span> <span class="nx">vertOffset</span> <span class="o">+</span> <span class="nx">horizOffset</span> <span class="o">+</span> <span class="nx">rowOffset</span> <span class="o">+</span> <span class="p">(</span><span class="nx">l</span> <span class="o">*</span> <span class="mi">4</span><span class="p">);</span></div><div class='line' id='LC213'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">rgb</span><span class="p">.</span><span class="nx">r</span> <span class="o">+=</span> <span class="nx">pixels</span><span class="p">[</span><span class="nx">offset</span><span class="p">];</span></div><div class='line' id='LC214'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">rgb</span><span class="p">.</span><span class="nx">g</span> <span class="o">+=</span> <span class="nx">pixels</span><span class="p">[</span><span class="nx">offset</span><span class="o">+</span><span class="mi">1</span><span class="p">];</span></div><div class='line' id='LC215'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">rgb</span><span class="p">.</span><span class="nx">b</span> <span class="o">+=</span> <span class="nx">pixels</span><span class="p">[</span><span class="nx">offset</span><span class="o">+</span><span class="mi">2</span><span class="p">];</span></div><div class='line' id='LC216'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">count</span><span class="o">++</span><span class="p">;</span></div><div class='line' id='LC217'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC218'><br/></div><div class='line' id='LC219'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC220'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">rgb</span><span class="p">.</span><span class="nx">r</span> <span class="o">=</span> <span class="o">~~</span><span class="p">(</span><span class="nx">rgb</span><span class="p">.</span><span class="nx">r</span><span class="o">/</span><span class="nx">count</span><span class="p">);</span></div><div class='line' id='LC221'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">rgb</span><span class="p">.</span><span class="nx">g</span> <span class="o">=</span> <span class="o">~~</span><span class="p">(</span><span class="nx">rgb</span><span class="p">.</span><span class="nx">g</span><span class="o">/</span><span class="nx">count</span><span class="p">);</span></div><div class='line' id='LC222'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">rgb</span><span class="p">.</span><span class="nx">b</span> <span class="o">=</span> <span class="o">~~</span><span class="p">(</span><span class="nx">rgb</span><span class="p">.</span><span class="nx">b</span><span class="o">/</span><span class="nx">count</span><span class="p">);</span></div><div class='line' id='LC223'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">palette</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">rgb</span><span class="p">);</span></div><div class='line' id='LC224'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC225'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC226'><br/></div><div class='line' id='LC227'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">palette</span><span class="p">;</span></div><div class='line' id='LC228'><span class="p">}</span></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

          </div>
        </div>

        <a href="#jump-to-line" rel="facebox" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
        <div id="jump-to-line" style="display:none">
          <h2>Jump to Line</h2>
          <form accept-charset="UTF-8" class="js-jump-to-line-form">
            <input class="textfield js-jump-to-line-field" type="text">
            <div class="full-button">
              <button type="submit" class="button">Go</button>
            </div>
          </form>
        </div>

      </div>
    </div>
</div>

<div id="js-frame-loading-template" class="frame frame-loading large-loading-area" style="display:none;">
  <img class="js-frame-loading-spinner" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-128.gif?1347543528" height="64" width="64">
</div>


        </div>
      </div>
      <div class="context-overlay"></div>
    </div>

      <div id="footer-push"></div><!-- hack for sticky footer -->
    </div><!-- end of wrapper - hack for sticky footer -->

      <!-- footer -->
      <div id="footer">
  <div class="container clearfix">

      <dl class="footer_nav">
        <dt>GitHub</dt>
        <dd><a href="https://github.com/about">About us</a></dd>
        <dd><a href="https://github.com/blog">Blog</a></dd>
        <dd><a href="https://github.com/contact">Contact &amp; support</a></dd>
        <dd><a href="http://enterprise.github.com/">GitHub Enterprise</a></dd>
        <dd><a href="http://status.github.com/">Site status</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Applications</dt>
        <dd><a href="http://mac.github.com/">GitHub for Mac</a></dd>
        <dd><a href="http://windows.github.com/">GitHub for Windows</a></dd>
        <dd><a href="http://eclipse.github.com/">GitHub for Eclipse</a></dd>
        <dd><a href="http://mobile.github.com/">GitHub mobile apps</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Services</dt>
        <dd><a href="http://get.gaug.es/">Gauges: Web analytics</a></dd>
        <dd><a href="http://speakerdeck.com">Speaker Deck: Presentations</a></dd>
        <dd><a href="https://gist.github.com">Gist: Code snippets</a></dd>
        <dd><a href="http://jobs.github.com/">Job board</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Documentation</dt>
        <dd><a href="http://help.github.com/">GitHub Help</a></dd>
        <dd><a href="http://developer.github.com/">Developer API</a></dd>
        <dd><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></dd>
        <dd><a href="http://pages.github.com/">GitHub Pages</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>More</dt>
        <dd><a href="http://training.github.com/">Training</a></dd>
        <dd><a href="https://github.com/edu">Students &amp; teachers</a></dd>
        <dd><a href="http://shop.github.com">The Shop</a></dd>
        <dd><a href="/plans">Plans &amp; pricing</a></dd>
        <dd><a href="http://octodex.github.com/">The Octodex</a></dd>
      </dl>

      <hr class="footer-divider">


    <p class="right">&copy; 2013 <span title="0.06448s from fe1.rs.github.com">GitHub</span>, Inc. All rights reserved.</p>
    <a class="left" href="https://github.com/">
      <span class="mega-icon mega-icon-invertocat"></span>
    </a>
    <ul id="legal">
        <li><a href="https://github.com/site/terms">Terms of Service</a></li>
        <li><a href="https://github.com/site/privacy">Privacy</a></li>
        <li><a href="https://github.com/security">Security</a></li>
    </ul>

  </div><!-- /.container -->

</div><!-- /.#footer -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/lokesh/color-thief/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-icon mega-icon-normalscreen"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="mini-icon mini-icon-brightness"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="mini-icon mini-icon-exclamation"></span>
      Something went wrong with that request. Please try again.
      <a href="#" class="mini-icon mini-icon-remove-close ajax-error-dismiss"></a>
    </div>

    
    
    <span id='server_response_time' data-time='0.06499' data-host='fe1'></span>
    
  </body>
</html>

