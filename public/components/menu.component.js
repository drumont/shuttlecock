
;(function () {
    'use strict'

    const menuTemplate =  ` 
        <!--Navbar-->
               <nav id="menu" class="navbar navbar-expand-lg navbar-dark mdb-color lighten-3 mt-3 mb-5">

                    <!-- Navbar brand -->
                    <span class="navbar-brand">Categories:</span>

                    <!-- Collapse button -->
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav" aria-controls="basicExampleNav"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <!-- Collapsible  content -->
                    <div class="collapse navbar-collapse" id="basicExampleNav">

                        <!-- Links -->
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">All
                                    <span class="sr-only">(current)</span>
                                </a>
                            </li>
                            <li class="nav-item" v-for="item in categorielist">
                                <a class="nav-link" href="#"> {{ item.name }} </a>
                            </li>
                        </ul>
                        <!-- Links -->

                        <form class="form-inline">
                            <div class="md-form my-0">
                                <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
                            </div>
                        </form>
                    </div>
                    <!-- Collapsible content -->

                </nav>
        <!--/.Navbar-->
        `


    Vue.component('menu-categorie', {
        props : ["categorielist"],
        template: menuTemplate
    })
})()
