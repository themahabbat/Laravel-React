<?php

Route::get('/{path?}', function(){
   return view('pages.main');
});
