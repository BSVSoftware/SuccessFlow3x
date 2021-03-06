



<!DOCTYPE html>
<html lang="en" class="">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    
    
    <title>Blob.js/Blob.js at master · eligrey/Blob.js · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="eligrey/Blob.js" name="twitter:title" /><meta content="Blob.js - An HTML5 Blob implementation" name="twitter:description" /><meta content="https://avatars3.githubusercontent.com/u/46995?v=3&amp;s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars3.githubusercontent.com/u/46995?v=3&amp;s=400" property="og:image" /><meta content="eligrey/Blob.js" property="og:title" /><meta content="https://github.com/eligrey/Blob.js" property="og:url" /><meta content="Blob.js - An HTML5 Blob implementation" property="og:description" />

      <meta name="browser-stats-url" content="/_stats">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035">
    
    <meta name="pjax-timeout" content="1000">
    

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="3E9AD744:67D1:1333F1C3:5465CEDC" name="octolytics-dimension-request_id" />
    
    <meta content="Rails, view, blob#show" name="analytics-event" />

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="qu8EON5UwKXurRdEFlapcgpd5ye/aq7rlWpWzRAKy/ODFOlbsS6th3hf6sYsRS6cCQH/2XMXGrUB+AOKESgzVw==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-1a2396c5eb371559f3a159e677a975bf1ac09b0d78f822f66a7b9158abaa8607.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://assets-cdn.github.com/assets/github2-9aa4b930049b7014e979a1c83b9ddb77734842a06479f13feec157a03bd25b76.css" media="all" rel="stylesheet" type="text/css" />
    
    


    <meta http-equiv="x-pjax-version" content="96f0a1df368999fe504635716dba5235">

      
  <meta name="description" content="Blob.js - An HTML5 Blob implementation">
  <meta name="go-import" content="github.com/eligrey/Blob.js git https://github.com/eligrey/Blob.js.git">

  <meta content="46995" name="octolytics-dimension-user_id" /><meta content="eligrey" name="octolytics-dimension-user_login" /><meta content="2051220" name="octolytics-dimension-repository_id" /><meta content="eligrey/Blob.js" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="2051220" name="octolytics-dimension-repository_network_root_id" /><meta content="eligrey/Blob.js" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/eligrey/Blob.js/commits/master.atom" rel="alternate" title="Recent Commits to Blob.js:master" type="application/atom+xml">

  </head>


  <body class="logged_out  env-production windows vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      
      <div class="header header-logged-out" role="banner">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/" ga-data-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions" role="navigation">
        <a class="button primary" href="/join" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign up</a>
      <a class="button signin" href="/login?return_to=%2Feligrey%2FBlob.js%2Fblob%2Fmaster%2FBlob.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
    </div>

    <div class="site-search repo-scope js-site-search" role="search">
      <form accept-charset="UTF-8" action="/eligrey/Blob.js/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/eligrey/Blob.js/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <input type="text"
    class="js-site-search-field is-clearable"
    data-hotkey="s"
    name="q"
    placeholder="Search"
    data-global-scope-placeholder="Search GitHub"
    data-repo-scope-placeholder="Search"
    tabindex="1"
    autocapitalize="off">
  <div class="scope-badge">This repository</div>
</form>
    </div>

      <ul class="header-nav left" role="navigation">
          <li class="header-nav-item">
            <a class="header-nav-link" href="/explore" data-ga-click="(Logged out) Header, go to explore, text:explore">Explore</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/features" data-ga-click="(Logged out) Header, go to features, text:features">Features</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://enterprise.github.com/" data-ga-click="(Logged out) Header, go to enterprise, text:enterprise">Enterprise</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/blog" data-ga-click="(Logged out) Header, go to blog, text:blog">Blog</a>
          </li>
      </ul>

  </div>
</div>



      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        
<ul class="pagehead-actions">


  <li>
      <a href="/login?return_to=%2Feligrey%2FBlob.js"
    class="minibutton with-count star-button tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <span class="octicon octicon-star"></span>
    Star
  </a>

    <a class="social-count js-social-count" href="/eligrey/Blob.js/stargazers">
      285
    </a>

  </li>

    <li>
      <a href="/login?return_to=%2Feligrey%2FBlob.js"
        class="minibutton with-count js-toggler-target fork-button tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-repo-forked"></span>
        Fork
      </a>
      <a href="/eligrey/Blob.js/network" class="social-count">
        116
      </a>
    </li>
</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/eligrey" class="url fn" itemprop="url" rel="author"><span itemprop="title">eligrey</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/eligrey/Blob.js" class="js-current-repository" data-pjax="#js-repo-pjax-container">Blob.js</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            
<nav class="sunken-menu repo-nav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container"
     data-issue-count-url="/eligrey/Blob.js/issues/counts">
  <ul class="sunken-menu-group">
    <li class="tooltipped tooltipped-w" aria-label="Code">
      <a href="/eligrey/Blob.js" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /eligrey/Blob.js">
        <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Issues">
        <a href="/eligrey/Blob.js/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /eligrey/Blob.js/issues">
          <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
          <span class="js-issue-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

    <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
      <a href="/eligrey/Blob.js/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g p" data-selected-links="repo_pulls /eligrey/Blob.js/pulls">
          <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
          <span class="js-pull-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>


  </ul>
  <div class="sunken-menu-separator"></div>
  <ul class="sunken-menu-group">

    <li class="tooltipped tooltipped-w" aria-label="Pulse">
      <a href="/eligrey/Blob.js/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-selected-links="pulse /eligrey/Blob.js/pulse">
        <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

    <li class="tooltipped tooltipped-w" aria-label="Graphs">
      <a href="/eligrey/Blob.js/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-selected-links="repo_graphs repo_contributors /eligrey/Blob.js/graphs">
        <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>
  </ul>


</nav>

              <div class="only-with-full-nav">
                
  
<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="https://github.com/eligrey/Blob.js.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/eligrey/Blob.js.git" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="https://github.com/eligrey/Blob.js" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/eligrey/Blob.js" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>


  <a href="http://windows.github.com" class="minibutton sidebar-button" title="Save eligrey/Blob.js to your computer and use it in GitHub Desktop." aria-label="Save eligrey/Blob.js to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

                <a href="/eligrey/Blob.js/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download the contents of eligrey/Blob.js as a zip file"
                   title="Download the contents of eligrey/Blob.js as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          

<a href="/eligrey/Blob.js/blob/2bca2cc205d5f23e10e1818ee9f63dfcd56096b5/Blob.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:00727b2e0bb5705f346bbf85e17d3458 -->

<div class="file-navigation">
  
<div class="select-menu js-menu-container js-select-menu left">
  <span class="minibutton select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
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

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eligrey/Blob.js/blob/master/Blob.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="button-group right">
    <a href="/eligrey/Blob.js/find/master"
          class="js-show-file-finder minibutton empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="Blob.js" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
  </div>

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/eligrey/Blob.js" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">Blob.js</span></a></span></span><span class="separator"> / </span><strong class="final-path">Blob.js</strong>
  </div>
</div>


  <div class="commit file-history-tease">
    <div class="file-history-tease-header">
        <img alt="Eli Grey" class="avatar" data-user="46995" height="24" src="https://avatars3.githubusercontent.com/u/46995?v=2&amp;s=48" width="24" />
        <span class="author"><a href="/eligrey" rel="author">eligrey</a></span>
        <time datetime="2014-09-08T21:17:20Z" is="relative-time">Sep 8, 2014</time>
        <div class="commit-title">
            <a href="/eligrey/Blob.js/commit/2bca2cc205d5f23e10e1818ee9f63dfcd56096b5" class="message" data-pjax="true" title="Fix attribution to Devin Samarin">Fix attribution to Devin Samarin</a>
        </div>
    </div>

    <div class="participation">
      <p class="quickstat">
        <a href="#blob_contributors_box" rel="facebox">
          <strong>8</strong>
           contributors
        </a>
      </p>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="eligrey" href="/eligrey/Blob.js/commits/master/Blob.js?author=eligrey"><img alt="Eli Grey" class="avatar" data-user="46995" height="20" src="https://avatars1.githubusercontent.com/u/46995?v=2&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="udondan" href="/eligrey/Blob.js/commits/master/Blob.js?author=udondan"><img alt="udondan" class="avatar" data-user="6443408" height="20" src="https://avatars3.githubusercontent.com/u/6443408?v=2&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="LiuJi-Jim" href="/eligrey/Blob.js/commits/master/Blob.js?author=LiuJi-Jim"><img alt="Liu Ji" class="avatar" data-user="2749742" height="20" src="https://avatars0.githubusercontent.com/u/2749742?v=2&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="tyrasd" href="/eligrey/Blob.js/commits/master/Blob.js?author=tyrasd"><img alt="Martin Raifer" class="avatar" data-user="1927298" height="20" src="https://avatars3.githubusercontent.com/u/1927298?v=2&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="dsamarin" href="/eligrey/Blob.js/commits/master/Blob.js?author=dsamarin"><img alt="Devin Samarin" class="avatar" data-user="110829" height="20" src="https://avatars2.githubusercontent.com/u/110829?v=2&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="lifof" href="/eligrey/Blob.js/commits/master/Blob.js?author=lifof"><img alt="lifof" class="avatar" data-user="1725688" height="20" src="https://avatars2.githubusercontent.com/u/1725688?v=2&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="diegocr" href="/eligrey/Blob.js/commits/master/Blob.js?author=diegocr"><img alt="Diego Casorran" class="avatar" data-user="734313" height="20" src="https://avatars1.githubusercontent.com/u/734313?v=2&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="collinanderson" href="/eligrey/Blob.js/commits/master/Blob.js?author=collinanderson"><img alt="Collin Anderson" class="avatar" data-user="129234" height="20" src="https://avatars0.githubusercontent.com/u/129234?v=2&amp;s=40" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="Eli Grey" data-user="46995" height="24" src="https://avatars3.githubusercontent.com/u/46995?v=2&amp;s=48" width="24" />
            <a href="/eligrey">eligrey</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="udondan" data-user="6443408" height="24" src="https://avatars1.githubusercontent.com/u/6443408?v=2&amp;s=48" width="24" />
            <a href="/udondan">udondan</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Liu Ji" data-user="2749742" height="24" src="https://avatars2.githubusercontent.com/u/2749742?v=2&amp;s=48" width="24" />
            <a href="/LiuJi-Jim">LiuJi-Jim</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Martin Raifer" data-user="1927298" height="24" src="https://avatars1.githubusercontent.com/u/1927298?v=2&amp;s=48" width="24" />
            <a href="/tyrasd">tyrasd</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Devin Samarin" data-user="110829" height="24" src="https://avatars0.githubusercontent.com/u/110829?v=2&amp;s=48" width="24" />
            <a href="/dsamarin">dsamarin</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="lifof" data-user="1725688" height="24" src="https://avatars0.githubusercontent.com/u/1725688?v=2&amp;s=48" width="24" />
            <a href="/lifof">lifof</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Diego Casorran" data-user="734313" height="24" src="https://avatars3.githubusercontent.com/u/734313?v=2&amp;s=48" width="24" />
            <a href="/diegocr">diegocr</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Collin Anderson" data-user="129234" height="24" src="https://avatars2.githubusercontent.com/u/129234?v=2&amp;s=48" width="24" />
            <a href="/collinanderson">collinanderson</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
          <span>198 lines (188 sloc)</span>
          <span class="meta-divider"></span>
        <span>5.77 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
          <a href="/eligrey/Blob.js/raw/master/Blob.js" class="minibutton " id="raw-url">Raw</a>
            <a href="/eligrey/Blob.js/blame/master/Blob.js" class="minibutton js-update-url-with-hash">Blame</a>
          <a href="/eligrey/Blob.js/commits/master/Blob.js" class="minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->

          <a class="octicon-button tooltipped tooltipped-nw"
             href="http://windows.github.com" aria-label="Open this file in GitHub for Windows">
              <span class="octicon octicon-device-desktop"></span>
          </a>

            <a class="octicon-button disabled tooltipped tooltipped-w" href="#"
               aria-label="You must be signed in to make or propose changes"><span class="octicon octicon-pencil"></span></a>

          <a class="octicon-button danger disabled tooltipped tooltipped-w" href="#"
             aria-label="You must be signed in to make or propose changes">
          <span class="octicon octicon-trashcan"></span>
        </a>
      </div><!-- /.actions -->
    </div>
    

  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size-8 js-file-line-container">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code js-file-line"><span class="pl-c"><span class="pl-pdc">/*</span> Blob.js</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code js-file-line"><span class="pl-c"> * A Blob implementation.</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code js-file-line"><span class="pl-c"> * 2014-07-24</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code js-file-line"><span class="pl-c"> * By Eli Grey, http://eligrey.com</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code js-file-line"><span class="pl-c"> * By Devin Samarin, https://github.com/dsamarin</span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code js-file-line"><span class="pl-c"> * License: X11/MIT</span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code js-file-line"><span class="pl-c"> *   See https://github.com/eligrey/Blob.js/blob/master/LICENSE.md</span></td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code js-file-line"><span class="pl-c"> <span class="pl-pdc">*/</span></span></td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code js-file-line"><span class="pl-c"><span class="pl-pdc">/*</span>global self, unescape <span class="pl-pdc">*/</span></span></td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code js-file-line"><span class="pl-c"><span class="pl-pdc">/*</span>jslint bitwise: true, regexp: true, confusion: true, es5: true, vars: true, white: true,</span></td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code js-file-line"><span class="pl-c">  plusplus: true <span class="pl-pdc">*/</span></span></td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code js-file-line"><span class="pl-c"><span class="pl-pdc">/*</span>! @source http://purl.eligrey.com/github/Blob.js/blob/master/Blob.js <span class="pl-pdc">*/</span></span></td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code js-file-line">(<span class="pl-s">function</span> (<span class="pl-vpf">view</span>) {</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code js-file-line">	<span class="pl-s1"><span class="pl-pds">&quot;</span>use strict<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code js-file-line">	view.URL <span class="pl-ko">=</span> view.URL <span class="pl-ko">||</span> view.webkitURL;</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code js-file-line">	<span class="pl-k">if</span> (view.Blob <span class="pl-ko">&amp;&amp;</span> view.URL) {</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code js-file-line">		<span class="pl-k">try</span> {</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code js-file-line">			<span class="pl-ko">new</span> <span class="pl-enti">Blob</span>;</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code js-file-line">			<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code js-file-line">		} <span class="pl-k">catch</span> (e) {}</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code js-file-line">	<span class="pl-c"><span class="pl-pdc">//</span> Internally we use a BlobBuilder implementation to base Blob off of</span></td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code js-file-line">	<span class="pl-c"><span class="pl-pdc">//</span> in order to support older browsers that only have BlobBuilder</span></td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code js-file-line">	<span class="pl-s">var</span> BlobBuilder <span class="pl-ko">=</span> view.BlobBuilder <span class="pl-ko">||</span> view.WebKitBlobBuilder <span class="pl-ko">||</span> view.MozBlobBuilder <span class="pl-ko">||</span> (<span class="pl-s">function</span>(<span class="pl-vpf">view</span>) {</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code js-file-line">		<span class="pl-s">var</span></td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code js-file-line">			  <span class="pl-enf">get_class</span> <span class="pl-ko">=</span> <span class="pl-s">function</span>(<span class="pl-vpf">object</span>) {</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code js-file-line">				<span class="pl-k">return</span> <span class="pl-sc">Object</span>.prototype.toString.<span class="pl-sf">call</span>(object).<span class="pl-sf">match</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-cce">\[</span>object<span class="pl-c1">\s</span>(<span class="pl-c1">.</span><span class="pl-ko">*</span>)<span class="pl-cce">\]</span><span class="pl-k">$</span><span class="pl-pds">/</span></span>)[<span class="pl-cn">1</span>];</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code js-file-line">			, FakeBlobBuilder <span class="pl-ko">=</span> <span class="pl-s">function</span> <span class="pl-enf">BlobBuilder</span>() {</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code js-file-line">				<span class="pl-v">this</span>.data <span class="pl-ko">=</span> [];</td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code js-file-line">			, FakeBlob <span class="pl-ko">=</span> <span class="pl-s">function</span> <span class="pl-enf">Blob</span>(<span class="pl-vpf">data</span>, <span class="pl-vpf">type</span>, <span class="pl-vpf">encoding</span>) {</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code js-file-line">				<span class="pl-v">this</span>.data <span class="pl-ko">=</span> data;</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code js-file-line">				<span class="pl-v">this</span>.size <span class="pl-ko">=</span> data.length;</td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code js-file-line">				<span class="pl-v">this</span>.type <span class="pl-ko">=</span> type;</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code js-file-line">				<span class="pl-v">this</span>.encoding <span class="pl-ko">=</span> encoding;</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code js-file-line">			, FBB_proto <span class="pl-ko">=</span> FakeBlobBuilder.prototype</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code js-file-line">			, FB_proto <span class="pl-ko">=</span> FakeBlob.prototype</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code js-file-line">			, FileReaderSync <span class="pl-ko">=</span> view.FileReaderSync</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code js-file-line">			, <span class="pl-enf">FileException</span> <span class="pl-ko">=</span> <span class="pl-s">function</span>(<span class="pl-vpf">type</span>) {</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code js-file-line">				<span class="pl-v">this</span>.code <span class="pl-ko">=</span> <span class="pl-v">this</span>[<span class="pl-v">this</span>.name <span class="pl-ko">=</span> type];</td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code js-file-line">			, file_ex_codes <span class="pl-ko">=</span> (</td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code js-file-line">				  <span class="pl-s1"><span class="pl-pds">&quot;</span>NOT_FOUND_ERR SECURITY_ERR ABORT_ERR NOT_READABLE_ERR ENCODING_ERR <span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code js-file-line">				<span class="pl-ko">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>NO_MODIFICATION_ALLOWED_ERR INVALID_STATE_ERR SYNTAX_ERR<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code js-file-line">			).<span class="pl-sf">split</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code js-file-line">			, file_ex_code <span class="pl-ko">=</span> file_ex_codes.length</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code js-file-line">			, real_URL <span class="pl-ko">=</span> view.URL <span class="pl-ko">||</span> view.webkitURL <span class="pl-ko">||</span> view</td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code js-file-line">			, real_create_object_URL <span class="pl-ko">=</span> real_URL.createObjectURL</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code js-file-line">			, real_revoke_object_URL <span class="pl-ko">=</span> real_URL.revokeObjectURL</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code js-file-line">			, URL <span class="pl-ko">=</span> real_URL</td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code js-file-line">			, btoa <span class="pl-ko">=</span> view.btoa</td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code js-file-line">			, atob <span class="pl-ko">=</span> view.atob</td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code js-file-line">			, ArrayBuffer <span class="pl-ko">=</span> view.ArrayBuffer</td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code js-file-line">			, Uint8Array <span class="pl-ko">=</span> view.Uint8Array</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code js-file-line">			, origin <span class="pl-ko">=</span><span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-c1">[<span class="pl-c1">\w</span>-]</span><span class="pl-ko">+</span>:<span class="pl-cce">\/</span><span class="pl-ko">*</span><span class="pl-cce">\[</span><span class="pl-ko">?</span><span class="pl-c1">[<span class="pl-c1">\w</span><span class="pl-cce">\.</span>:-]</span><span class="pl-ko">+</span><span class="pl-cce">\]</span><span class="pl-ko">?</span>(?::<span class="pl-c1">[<span class="pl-c1">0-9</span>]</span><span class="pl-ko">+</span>)<span class="pl-ko">?</span><span class="pl-pds">/</span></span></td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code js-file-line">		;</td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code js-file-line">		FakeBlob.fake <span class="pl-ko">=</span> FB_proto.fake <span class="pl-ko">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code js-file-line">		<span class="pl-k">while</span> (file_ex_code<span class="pl-ko">--</span>) {</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code js-file-line">			FileException.prototype[file_ex_codes[file_ex_code]] <span class="pl-ko">=</span> file_ex_code <span class="pl-ko">+</span> <span class="pl-cn">1</span>;</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code js-file-line">		<span class="pl-c"><span class="pl-pdc">//</span> Polyfill URL</span></td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code js-file-line">		<span class="pl-k">if</span> (<span class="pl-ko">!</span>real_URL.createObjectURL) {</td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code js-file-line">			URL <span class="pl-ko">=</span> <span class="pl-sc">view</span>.<span class="pl-enf">URL</span> <span class="pl-ko">=</span> <span class="pl-s">function</span>(<span class="pl-vpf">uri</span>) {</td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code js-file-line">				<span class="pl-s">var</span></td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code js-file-line">					  uri_info <span class="pl-ko">=</span> <span class="pl-sc">document</span>.createElementNS(<span class="pl-s1"><span class="pl-pds">&quot;</span>http://www.w3.org/1999/xhtml<span class="pl-pds">&quot;</span></span>, <span class="pl-s1"><span class="pl-pds">&quot;</span>a<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code js-file-line">					, uri_origin</td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code js-file-line">				;</td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code js-file-line">				uri_info.href <span class="pl-ko">=</span> uri;</td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code js-file-line">				<span class="pl-k">if</span> (<span class="pl-ko">!</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>origin<span class="pl-pds">&quot;</span></span> <span class="pl-ko">in</span> uri_info)) {</td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code js-file-line">					<span class="pl-k">if</span> (uri_info.protocol.<span class="pl-sf">toLowerCase</span>() <span class="pl-ko">===</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>data:<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code js-file-line">						uri_info.origin <span class="pl-ko">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code js-file-line">					} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code js-file-line">						uri_origin <span class="pl-ko">=</span> uri.<span class="pl-sf">match</span>(origin);</td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code js-file-line">						uri_info.origin <span class="pl-ko">=</span> uri_origin <span class="pl-ko">&amp;&amp;</span> uri_origin[<span class="pl-cn">1</span>];</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code js-file-line">				<span class="pl-k">return</span> uri_info;</td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code js-file-line">			};</td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code js-file-line">		<span class="pl-sc">URL</span>.<span class="pl-enf">createObjectURL</span> <span class="pl-ko">=</span> <span class="pl-s">function</span>(<span class="pl-vpf">blob</span>) {</td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code js-file-line">			<span class="pl-s">var</span></td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code js-file-line">				  type <span class="pl-ko">=</span> blob.type</td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code js-file-line">				, data_URI_header</td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code js-file-line">			;</td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code js-file-line">			<span class="pl-k">if</span> (type <span class="pl-ko">===</span> <span class="pl-c1">null</span>) {</td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code js-file-line">				type <span class="pl-ko">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>application/octet-stream<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code js-file-line">			<span class="pl-k">if</span> (blob <span class="pl-ko">instanceof</span> FakeBlob) {</td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code js-file-line">				data_URI_header <span class="pl-ko">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>data:<span class="pl-pds">&quot;</span></span> <span class="pl-ko">+</span> type;</td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code js-file-line">				<span class="pl-k">if</span> (blob.encoding <span class="pl-ko">===</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>base64<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code js-file-line">					<span class="pl-k">return</span> data_URI_header <span class="pl-ko">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>;base64,<span class="pl-pds">&quot;</span></span> <span class="pl-ko">+</span> blob.data;</td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code js-file-line">				} <span class="pl-k">else</span> <span class="pl-k">if</span> (blob.encoding <span class="pl-ko">===</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>URI<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code js-file-line">					<span class="pl-k">return</span> data_URI_header <span class="pl-ko">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>,<span class="pl-pds">&quot;</span></span> <span class="pl-ko">+</span> decodeURIComponent(blob.data);</td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code js-file-line">				} <span class="pl-k">if</span> (btoa) {</td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code js-file-line">					<span class="pl-k">return</span> data_URI_header <span class="pl-ko">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>;base64,<span class="pl-pds">&quot;</span></span> <span class="pl-ko">+</span> <span class="pl-sf">btoa</span>(blob.data);</td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code js-file-line">				} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code js-file-line">					<span class="pl-k">return</span> data_URI_header <span class="pl-ko">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>,<span class="pl-pds">&quot;</span></span> <span class="pl-ko">+</span> encodeURIComponent(blob.data);</td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code js-file-line">			} <span class="pl-k">else</span> <span class="pl-k">if</span> (real_create_object_URL) {</td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code js-file-line">				<span class="pl-k">return</span> real_create_object_URL.<span class="pl-sf">call</span>(real_URL, blob);</td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code js-file-line">		};</td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code js-file-line">		<span class="pl-sc">URL</span>.<span class="pl-enf">revokeObjectURL</span> <span class="pl-ko">=</span> <span class="pl-s">function</span>(<span class="pl-vpf">object_URL</span>) {</td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code js-file-line">			<span class="pl-k">if</span> (object_URL.<span class="pl-sf">substring</span>(<span class="pl-cn">0</span>, <span class="pl-cn">5</span>) <span class="pl-ko">!==</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>data:<span class="pl-pds">&quot;</span></span> <span class="pl-ko">&amp;&amp;</span> real_revoke_object_URL) {</td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code js-file-line">				real_revoke_object_URL.<span class="pl-sf">call</span>(real_URL, object_URL);</td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code js-file-line">		};</td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code js-file-line">		<span class="pl-sc">FBB_proto</span>.<span class="pl-enf">append</span> <span class="pl-ko">=</span> <span class="pl-s">function</span>(<span class="pl-vpf">data</span>/*, <span class="pl-vpf">endings</span>*/) {</td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code js-file-line">			<span class="pl-s">var</span> bb <span class="pl-ko">=</span> <span class="pl-v">this</span>.data;</td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code js-file-line">			<span class="pl-c"><span class="pl-pdc">//</span> decode data to a binary string</span></td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code js-file-line">			<span class="pl-k">if</span> (Uint8Array <span class="pl-ko">&amp;&amp;</span> (data <span class="pl-ko">instanceof</span> ArrayBuffer <span class="pl-ko">||</span> data <span class="pl-ko">instanceof</span> Uint8Array)) {</td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code js-file-line">				<span class="pl-s">var</span></td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code js-file-line">					  str <span class="pl-ko">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code js-file-line">					, buf <span class="pl-ko">=</span> <span class="pl-ko">new</span> <span class="pl-enti">Uint8Array</span>(data)</td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code js-file-line">					, i <span class="pl-ko">=</span> <span class="pl-cn">0</span></td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code js-file-line">					, buf_len <span class="pl-ko">=</span> buf.length</td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code js-file-line">				;</td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code js-file-line">				<span class="pl-k">for</span> (; i <span class="pl-ko">&lt;</span> buf_len; i<span class="pl-ko">++</span>) {</td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code js-file-line">					str <span class="pl-ko">+=</span> <span class="pl-sc">String</span>.<span class="pl-sf">fromCharCode</span>(buf[i]);</td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code js-file-line">				bb.<span class="pl-sf">push</span>(str);</td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code js-file-line">			} <span class="pl-k">else</span> <span class="pl-k">if</span> (get_class(data) <span class="pl-ko">===</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>Blob<span class="pl-pds">&quot;</span></span> <span class="pl-ko">||</span> get_class(data) <span class="pl-ko">===</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>File<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code js-file-line">				<span class="pl-k">if</span> (FileReaderSync) {</td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code js-file-line">					<span class="pl-s">var</span> fr <span class="pl-ko">=</span> <span class="pl-ko">new</span> <span class="pl-enti">FileReaderSync</span>;</td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code js-file-line">					bb.<span class="pl-sf">push</span>(fr.readAsBinaryString(data));</td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code js-file-line">				} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code js-file-line">					<span class="pl-c"><span class="pl-pdc">//</span> async FileReader won&#39;t work as BlobBuilder is sync</span></td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code js-file-line">					<span class="pl-k">throw</span> <span class="pl-ko">new</span> <span class="pl-enti">FileException</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>NOT_READABLE_ERR<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code js-file-line">			} <span class="pl-k">else</span> <span class="pl-k">if</span> (data <span class="pl-ko">instanceof</span> FakeBlob) {</td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code js-file-line">				<span class="pl-k">if</span> (data.encoding <span class="pl-ko">===</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>base64<span class="pl-pds">&quot;</span></span> <span class="pl-ko">&amp;&amp;</span> atob) {</td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code js-file-line">					bb.<span class="pl-sf">push</span>(<span class="pl-sf">atob</span>(data.data));</td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code js-file-line">				} <span class="pl-k">else</span> <span class="pl-k">if</span> (data.encoding <span class="pl-ko">===</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>URI<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code js-file-line">					bb.<span class="pl-sf">push</span>(decodeURIComponent(data.data));</td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code js-file-line">				} <span class="pl-k">else</span> <span class="pl-k">if</span> (data.encoding <span class="pl-ko">===</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>raw<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code js-file-line">					bb.<span class="pl-sf">push</span>(data.data);</td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code js-file-line">			} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code js-file-line">				<span class="pl-k">if</span> (<span class="pl-ko">typeof</span> data <span class="pl-ko">!==</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>string<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code js-file-line">					data <span class="pl-ko">+=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>; <span class="pl-c"><span class="pl-pdc">//</span> convert unsupported types to strings</span></td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code js-file-line">				<span class="pl-c"><span class="pl-pdc">//</span> decode UTF-16 to binary string</span></td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code js-file-line">				bb.<span class="pl-sf">push</span>(<span class="pl-sf">unescape</span>(encodeURIComponent(data)));</td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code js-file-line">		};</td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code js-file-line">		<span class="pl-sc">FBB_proto</span>.<span class="pl-enf">getBlob</span> <span class="pl-ko">=</span> <span class="pl-s">function</span>(<span class="pl-vpf">type</span>) {</td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code js-file-line">			<span class="pl-k">if</span> (<span class="pl-ko">!</span>arguments.length) {</td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code js-file-line">				type <span class="pl-ko">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code js-file-line">			<span class="pl-k">return</span> <span class="pl-ko">new</span> <span class="pl-enti">FakeBlob</span>(<span class="pl-v">this</span>.data.<span class="pl-sf">join</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>), type, <span class="pl-s1"><span class="pl-pds">&quot;</span>raw<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code js-file-line">		};</td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code js-file-line">		<span class="pl-sc">FBB_proto</span>.<span class="pl-enf">toString</span> <span class="pl-ko">=</span> <span class="pl-s">function</span>() {</td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code js-file-line">			<span class="pl-k">return</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>[object BlobBuilder]<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code js-file-line">		};</td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code js-file-line">		<span class="pl-sc">FB_proto</span>.<span class="pl-enf">slice</span> <span class="pl-ko">=</span> <span class="pl-s">function</span>(<span class="pl-vpf">start</span>, <span class="pl-vpf">end</span>, <span class="pl-vpf">type</span>) {</td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code js-file-line">			<span class="pl-s">var</span> args <span class="pl-ko">=</span> arguments.length;</td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code js-file-line">			<span class="pl-k">if</span> (args <span class="pl-ko">&lt;</span> <span class="pl-cn">3</span>) {</td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code js-file-line">				type <span class="pl-ko">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code js-file-line">			<span class="pl-k">return</span> <span class="pl-ko">new</span> <span class="pl-enti">FakeBlob</span>(</td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code js-file-line">				  <span class="pl-v">this</span>.data.<span class="pl-sf">slice</span>(start, args <span class="pl-ko">&gt;</span> <span class="pl-cn">1</span> <span class="pl-ko">?</span> end <span class="pl-ko">:</span> <span class="pl-v">this</span>.data.length)</td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code js-file-line">				, type</td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code js-file-line">				, <span class="pl-v">this</span>.encoding</td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code js-file-line">			);</td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code js-file-line">		};</td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code js-file-line">		<span class="pl-sc">FB_proto</span>.<span class="pl-enf">toString</span> <span class="pl-ko">=</span> <span class="pl-s">function</span>() {</td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code js-file-line">			<span class="pl-k">return</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>[object Blob]<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code js-file-line">		};</td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code js-file-line">		<span class="pl-sc">FB_proto</span>.<span class="pl-enf">close</span> <span class="pl-ko">=</span> <span class="pl-s">function</span>() {</td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code js-file-line">			<span class="pl-v">this</span>.size <span class="pl-ko">=</span> <span class="pl-cn">0</span>;</td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code js-file-line">			<span class="pl-ko">delete</span> <span class="pl-v">this</span>.data;</td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code js-file-line">		};</td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code js-file-line">		<span class="pl-k">return</span> FakeBlobBuilder;</td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code js-file-line">	}(view));</td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code js-file-line">	<span class="pl-sc">view</span>.<span class="pl-enf">Blob</span> <span class="pl-ko">=</span> <span class="pl-s">function</span>(<span class="pl-vpf">blobParts</span>, <span class="pl-vpf">options</span>) {</td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code js-file-line">		<span class="pl-s">var</span> type <span class="pl-ko">=</span> options <span class="pl-ko">?</span> (options.type <span class="pl-ko">||</span> <span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>) <span class="pl-ko">:</span> <span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code js-file-line">		<span class="pl-s">var</span> builder <span class="pl-ko">=</span> <span class="pl-ko">new</span> <span class="pl-enti">BlobBuilder</span>();</td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code js-file-line">		<span class="pl-k">if</span> (blobParts) {</td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code js-file-line">			<span class="pl-k">for</span> (<span class="pl-s">var</span> i <span class="pl-ko">=</span> <span class="pl-cn">0</span>, len <span class="pl-ko">=</span> blobParts.length; i <span class="pl-ko">&lt;</span> len; i<span class="pl-ko">++</span>) {</td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code js-file-line">				builder.append(blobParts[i]);</td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code js-file-line">		<span class="pl-k">return</span> builder.getBlob(type);</td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code js-file-line">}(<span class="pl-ko">typeof</span> self <span class="pl-ko">!==</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>undefined<span class="pl-pds">&quot;</span></span> <span class="pl-ko">&amp;&amp;</span> self <span class="pl-ko">||</span> <span class="pl-ko">typeof</span> <span class="pl-sc">window</span> <span class="pl-ko">!==</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>undefined<span class="pl-pds">&quot;</span></span> <span class="pl-ko">&amp;&amp;</span> <span class="pl-sc">window</span> <span class="pl-ko">||</span> <span class="pl-v">this</span>.content <span class="pl-ko">||</span> <span class="pl-v">this</span>));</td>
      </tr>
</table>

  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="https://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.05479s from github-fe117-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents js-suggester-field" placeholder=""></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x flash-close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-2d727fed4d969b14b28165c75ad12d7dddd56c0198fa70cedc3fdad7ac395b2c.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-684891bceb382002c2b78afbaee41d8959d7fcd0475250e2e5ab23e8b72321d2.js" type="text/javascript"></script>
      
      
  </body>
</html>

