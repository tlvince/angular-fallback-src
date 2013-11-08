" Ignore some directories
let g:ctrlp_custom_ignore = '\v[\/](node_modules|bower_components)$'

" Syntastic options
let g:syntastic_html_tidy_ignore_errors = [
  \   ' proprietary attribute "ng-'
  \ , '<img> proprietary attribute "fb-src"'
  \ , '<img> lacks "alt" attribute'
  \ , '<img> lacks "src" attribute'
  \ ]
