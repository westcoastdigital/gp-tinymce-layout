(function ($) {
    tinymce.create('tinymce.plugins.wcd', {
        /**
         * Initializes the plugin, this will be executed after the plugin has been created.
         * This call is done before the editor instance has finished it's initialization so use the onInit event
         * of the editor instance to intercept that event.
         *
         * @param {tinymce.Editor} ed Editor instance that the plugin is initialized in.
         * @param {string} url Absolute URL to where the plugin is located.
         */

        init: function (ed, url) {

            ed.addButton('wcd-options', {
                title: 'Add Columns',
                type: 'menubutton',
                //cmd : 'columns',
                menu: [
                    {
                        text: 'Columns',
                        menu: [
                            {
                                text: 'Add Columns',
                                value: 'cols',
                                onclick: function () {
                                    wcdAddColumns(ed);
                                }
                            },
                            {
                                text: 'Delete Columns',
                                value: 'deleteCol',
                                onclick: function () {
                                    wcdDeleteColumns(ed);
                                }
                            },
                        ]

                    },
                    {
                        text: 'Button',
                        value: 'button',
                        onclick: function () {
                            wcdButton(ed);
                        }
                    },

                ]
            });


            //Adding similar sized columns
            function wcdAddColumns(ed) {
                var selected_text = ed.selection.getContent() ? ed.selection.getContent() : 'Column';
                ed.windowManager.open({
                    title: 'How Many Columns',
                    body: [{
                        type: 'textbox',
                        name: 'number',
                        label: 'How Many Columns'
                    },
                        {
                            type: 'listbox',
                            name: 'desktopwidth',
                            label: 'Desktop Width:',
                            values: [
                                {text: '25%', value: ' grid-25'},
                                {text: '5%', value: ' grid-5'},
                                {text: '10%', value: ' grid-10'},
                                {text: '15%', value: ' grid-15'},
                                {text: '20%', value: ' grid-20'},
                                {text: '30%', value: ' grid-30'},
                                {text: '33%', value: ' grid-33'},
                                {text: '35%', value: ' grid-35'},
                                {text: '40%', value: ' grid-40'},
                                {text: '45%', value: ' grid-45'},
                                {text: '50%', value: ' grid-50'},
                                {text: '55%', value: ' grid-55'},
                                {text: '60%', value: ' grid-60'},
                                {text: '65%', value: ' grid-65'},
                                {text: '66%', value: ' grid-66'},
                                {text: '70%', value: ' grid-70'},
                                {text: '75%', value: ' grid-75'},
                                {text: '80%', value: ' grid-80'},
                                {text: '85%', value: ' grid-85'},
                                {text: '90%', value: ' grid-90'},
                                {text: '95%', value: ' grid-95'},
                                {text: '100%', value: ' grid-100'}
                            ]
                        },
                        {
                            type: 'listbox',
                            name: 'tabletwidth',
                            label: 'Tablet Width:',
                            values: [
                                {text: '50%', value: ' tablet-grid-50'},
                                {text: '5%', value: ' tablet-grid-5'},
                                {text: '10%', value: ' tablet-grid-10'},
                                {text: '15%', value: ' tablet-grid-15'},
                                {text: '20%', value: ' tablet-grid-20'},
                                {text: '25%', value: ' tablet-grid-25'},
                                {text: '30%', value: ' tablet-grid-30'},
                                {text: '33%', value: ' tablet-grid-33'},
                                {text: '35%', value: ' tablet-grid-35'},
                                {text: '40%', value: ' tablet-grid-40'},
                                {text: '45%', value: ' tablet-grid-45'},
                                {text: '55%', value: ' tablet-grid-55'},
                                {text: '60%', value: ' tablet-grid-60'},
                                {text: '65%', value: ' tablet-grid-65'},
                                {text: '66%', value: ' tablet-grid-66'},
                                {text: '70%', value: ' tablet-grid-70'},
                                {text: '75%', value: ' tablet-grid-75'},
                                {text: '80%', value: ' tablet-grid-80'},
                                {text: '85%', value: ' tablet-grid-85'},
                                {text: '90%', value: ' tablet-grid-90'},
                                {text: '95%', value: ' tablet-grid-95'},
                                {text: '100%', value: ' tablet-grid-100'}
                            ]
                        },
                        {
                            type: 'listbox',
                            name: 'mobilewidth',
                            label: 'Mobile Width:',
                            values: [
                                {text: '100%', value: ' mobile-grid-100'},
                                {text: '5%', value: ' mobile-grid-5'},
                                {text: '10%', value: ' mobile-grid-10'},
                                {text: '15%', value: ' mobile-grid-15'},
                                {text: '20%', value: ' mobile-grid-20'},
                                {text: '25%', value: ' mobile-grid-25'},
                                {text: '30%', value: ' mobile-grid-30'},
                                {text: '33%', value: ' mobile-grid-33'},
                                {text: '35%', value: ' mobile-grid-35'},
                                {text: '40%', value: ' mobile-grid-40'},
                                {text: '45%', value: ' mobile-grid-45'},
                                {text: '50%', value: ' mobile-grid-50'},
                                {text: '55%', value: ' mobile-grid-55'},
                                {text: '60%', value: ' mobile-grid-60'},
                                {text: '65%', value: ' mobile-grid-65'},
                                {text: '66%', value: ' mobile-grid-66'},
                                {text: '70%', value: ' mobile-grid-70'},
                                {text: '75%', value: ' mobile-grid-75'},
                                {text: '80%', value: ' mobile-grid-80'},
                                {text: '85%', value: ' mobile-grid-85'},
                                {text: '90%', value: ' mobile-grid-90'},
                                {text: '95%', value: ' mobile-grid-95'}
                            ]
                        }],
                    onsubmit: function (e) {
                        var return_text = '';

                        var desktopClass = e.data.desktopwidth;
                        var tabletClass = e.data.tabletwidth;
                        var mobileClass = e.data.mobilewidth;


                        return_text = '<div class="grid-parent">';
                        return_text.replace(/\s{2,}/g, ' ');

                        for (var i = 0; i < e.data.number; i++) {
                            return_text += '<div class="col' + desktopClass + tabletClass + mobileClass + '">' + selected_text + '</div>';
                        }
                        return_text += ' </div>';
                        ed.insertContent(return_text, {format: 'raw'});
                    }

                });
            }


            //customize column
            function wcdCustomColumns(ed) {

                //get cursor element
                var elem = ed.selection.getNode();

                if ($(elem).is('[class*=col]')) {

                    ed.windowManager.open({
                        title: 'Column Size',
                        body: [{
                            type: 'listbox',
                            name: 'col',
                            label: 'Column Size',
                            values: [
                                {text: 'col', value: 'col'},
                                {text: 'col-1-2', value: 'col-1-2'},
                                {text: 'col-1-3', value: 'col-1-3'},
                                {text: 'col-1-4', value: 'col-1-4'},
                                {text: 'col-3-4', value: 'col-3-4'},
                                {text: 'col-1-5', value: 'col-1-5'},
                                {text: 'col-2-5', value: 'col-2-5'},
                                {text: 'col-3-5', value: 'col-3-5'},
                                {text: 'col-4-5', value: 'col-4-5'},
                                {text: 'col-1-6', value: 'col-1-6'},
                                {text: 'col-5-6', value: 'col-5-6'}
                            ]
                        },
                            {
                                type: 'listbox',
                                name: 'keepmobile',
                                label: 'Responsive:',
                                values: [
                                    {text: 'collapse columns on mobile', value: ''},
                                    {text: 'keep columns on mobile', value: 'stay-on-mobile'}
                                ]
                            },
                            {
                                type: 'listbox',
                                name: 'margin',
                                label: 'margin bottom',
                                values: [
                                    {text: 'yes', value: 'm1'},
                                    {text: 'no', value: ''}
                                ]
                            },
                            {
                                type: 'listbox',
                                name: 'gutters',
                                label: 'Outter Gutters',
                                values: [
                                    {text: 'No outter gutters', value: 'negative-gutters'},
                                    {text: 'Outter gutters', value: ''}
                                ]
                            }
                        ],
                        onsubmit: function (e) {
                            var return_text = '';

                            //check if changes are being made to the parent grid-parent div
                            var responsiveClass = e.data.keepmobile;
                            var gutterClass = e.data.gutters;
                            var marginClass = e.data.margin;


                            //remove stay-on-mobile and gutter class
                            elem.parentNode.classList.remove('stay-on-mobile');
                            elem.parentNode.classList.remove('negative-gutters');
                            elem.parentNode.classList.remove('m1');

                            //add new responsive class
                            if (responsiveClass !== '') {
                                elem.parentNode.classList.add(responsiveClass);
                            }
                            //add gutter class
                            if (gutterClass !== '') {
                                elem.parentNode.classList.add(gutterClass);
                            }
                            //add gutter class
                            if (marginClass !== '') {
                                elem.parentNode.classList.add(marginClass);
                            }


                            return_text += '   <div class="' + e.data.col + '">' + elem.innerHTML + '</div>';

                            //replace old node
                            elem.parentNode.removeChild(elem);

                            ed.insertContent(return_text);
                        }

                    });
                }
            }

            //exit columns otherwise can be stuck inside the div
            function wcdExitColumns(ed) {

                var elem = ed.selection.getNode();
                var newNode = document.createElement("span");
                newNode.innerHTML = 'Your Free!';
                var elemAfter = elem.parentNode; //body or some div outside what you were in

                var newSpan = elemAfter.parentNode.insertBefore(newNode, elemAfter.nextSibling);
                ed.selection.select(newSpan);

            }


            //exit columns otherwise can be stuck inside the div
            function wcdDeleteColumns(ed) {

                var elem = ed.selection.getNode();
                if (elem.parentNode.classList.contains('grid-parent')) {
                    elem.parentNode.remove();
                }

            }


            function wcdBreakout(ed) {
                var selected_text = ed.selection.getContent() ? ed.selection.getContent() : '<p>Put content here</p>';

                //if your selecting text without any tags
                if (selected_text.indexOf('<') == -1) {
                    selected_text = '<p>' + selected_text + '</p>';
                }
                console.log(selected_text);
                var return_text = '   <div class="break-out">   <div class="inside-break-out">' + selected_text + ' </div> </div> &nbsp;';
                ed.insertContent(return_text);

            }

            function wcdWrap(ed) {
                var selected_text = ed.selection.getContent() ? ed.selection.getContent() : '<p>Put content here</p>';
                var return_text = '<div class="wrap">' + selected_text + '</div>';
                ed.insertContent(return_text);

            }

            function wcdContentColumn(ed) {
                var selected_text = ed.selection.getContent() ? ed.selection.getContent() : '<p>Put content here</p>';
                var return_text = '<div class="content-width">' + selected_text + '</div>';
                ed.insertContent(return_text);

            }


            function wcdButton(ed) {
                var selected_text = ed.selection.getContent() ? ed.selection.getContent() : 'Put content here';

                if (selected_text == 'Put content here') {
                    ed.insertContent('<button class="button">' + selected_text + '</button>');
                }
                else {
                    var elem = ed.selection.getNode();
                    elem.classList.add('button');
                }


            }


            /*  Not needed. On page blank you would use text/html to work anyway so no button needed.

             ed.addCommand('content-column', function() {
             var selected_text = ed.selection.getContent() ? ed.selection.getContent()  : 'Put content here';

             var return_text = '';
             return_text = '<div class="row"><div class="content-column"><p>' + selected_text + '</p></div></div>';

             ed.execCommand('mceInsertContent', 0, return_text);
             });
             */


            ed.addCommand('prism', function () {
                var langType = prompt("which language? php html scss markup... ");

                if (langType == null) {

                    langType = 'markup';
                }
                var selected_text = ed.selection.getContent({'format': 'raw'}) ? ed.selection.getContent({'format': 'raw'}) : 'Put content here';

                var return_text = '<pre><code class="language-' + langType + '">' + selected_text + '</code></pre>';
                ed.execCommand('mceInsertContent', false, return_text);
            });


            ed.addCommand('code', function () {
                var langType = prompt("which language? php html scss markup... ");

                if (langType == null) {

                    langType = 'markup';
                }
                var selected_text = ed.selection.getContent({'format': 'raw'}) ? ed.selection.getContent({'format': 'raw'}) : 'Put content here';

                var return_text = '<code class="language-' + langType + '">' + selected_text + '</code> ';
                ed.execCommand('mceInsertContent', false, return_text);
            });


        },

        /**
         * Creates control instances based in the incomming name. This method is normally not
         * needed since the addButton method of the tinymce.Editor class is a more easy way of adding buttons
         * but you sometimes need to create more complex controls like listboxes, split buttons etc then this
         * method can be used to create those.
         *
         * @param {String} n Name of the control to create.
         * @param {tinymce.ControlManager} cm Control manager to use inorder to create new control.
         * @return {tinymce.ui.Control} New control instance or null if no control was created.
         */
        createControl: function (n, cm) {
            return null;
        },

        /**
         * Returns information about the plugin as a name/value array.
         * The current keys are longname, author, authorurl, infourl and version.
         *
         * @return {Object} Name/value array containing information about the plugin.
         */
        getInfo: function () {
            return {
                longname: 'GeneratePress Buttons',
                author: 'West Coast Digital',
                authorurl: 'https://westcoastdigital.com.au',
                infourl: 'http://wiki.moxiecode.com/index.php/TinyMCE:Plugins/example',
                version: "1.0"
            };
        }
    });

    // Register plugin
    tinymce.PluginManager.add('wcd', tinymce.plugins.wcd);


})(jQuery);