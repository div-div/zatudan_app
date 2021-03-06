$(function(){
// console.log(3);
  $('select#parent_category').change(function() {

    //選択したvalue値を変数に格納
    var val = $(this).val();  //選択したセレクトボックスの選択肢のValueを変数にいれる。
    switch (val) {
      case "---":
        $('#sub-category').remove();   //子カテゴリーを消す。↓のvalueがDBに保存される。今はまだDBの構造がこのやり方と違うので入らない。
      break;
      case "1":
        $('#sub-category').remove();   //子カテゴリーを消す。↓のvalueがDBに保存される。今はまだDBの構造がこのやり方と違うので入らない。
        var select_cook = `<div class='select_box' id='sub-category'>
                                 <p>小カテゴリー</p>
                                 <select class="wrap__new-movie__field__window" id="child_category" name="movie[sub_category]">
                                   <option value="1" >和</option>
                                   <option value="2" >洋</option>
                                   <option value="3" >中</option>
                                 <select>
                           </div>`;
        $('.category').append(select_cook);  //select_cookを親カテゴリーのしたに追加する
      break;
      case "2":
        $('#sub-category').remove();
        var select_movie = `<div class='select_box' id='sub-category'>
                                 <p>小カテゴリー</p>
                                 <select class="wrap__new-movie__field__window" id="child_category" name="movie[sub_category]">
                                   <option value="4" >アクション</option>
                                   <option value="5" >コメディ</option>
                                   <option value="6" >ホラー</option>
                                 <select>
                           </div>`;
        $('.category').append(select_movie);
      break;
      case "3":
        $('#sub-category').remove();
        var select_gym = `<div class='select_box' id='sub-category'>
                                 <p>小カテゴリー</p>
                                 <select class="wrap__new-movie__field__window" id="child_category" name="movie[sub_category]">
                                   <option value="7" >上半身</option>
                                   <option value="8" >下半身</option>
                                   <option value="9" >ストレッチ</option>
                                 <select>
                          </div>`;
        $('.category').append(select_gym);
      break;
      case "4":
        $('#sub-category').remove();
        var select_music = `<div class='select_box' id='sub-category'>
                                 <p>小カテゴリー</p>
                                 <select class="wrap__new-movie__field__window" id="child_category" name="movie[sub_category]">
                                   <option value="10" >ヒップホップ</option>
                                   <option value="11" >LO-FI</option>
                                   <option value="12" >ロック</option>
                                 <select>
                           </div>`;
        $('.category').append(select_music);
      break;
    }
  });
  $('.slide').hide();
  $('.c_cook').hide();
  $('.c_movie').hide();
  $('.c_gym').hide();
  $('.c_music').hide();

  $('.cat__btn').click(    //ここはホバーよりクリックの方が良いと思います。
    function() {

      $(this).next('.slide').slideToggle('fast');

    },
    function() {

      $(this).next('.slide').slideToggle('fast');

    }
  );
  $('.s_all').click(    //ここはホバーよりクリックの方が良いと思います。
    function() {
        $('.c1').show();
        $('.c2').show();
        $('.c3').show();
        $('.c4').show();
    }
  );
  $('.s_cook').click(    //ここはホバーよりクリックの方が良いと思います。
    function() {

        $('.c1').show();
        $('.c2').hide();
        $('.c3').hide();
        $('.c4').hide();
    }
  );
  $('.s_movie').click(    //ここはホバーよりクリックの方が良いと思います。
    function() {
        $('.c1').hide();
        $('.c2').show();
        $('.c3').hide();
        $('.c4').hide();
    }
  );
  $('.s_gym').click(    //ここはホバーよりクリックの方が良いと思います。
    function() {
        $('.c1').hide();
        $('.c2').hide();
        $('.c3').show();
        $('.c4').hide();
    }
  );
  $('.s_music').click(    //ここはホバーよりクリックの方が良いと思います。
    function() {
        $('.c1').hide();
        $('.c2').hide();
        $('.c3').hide();
        $('.c4').show();
    }
  );
  $('.s_cook').hover(    //ここはホバーよりクリックの方が良いと思います。
    function() {
      $(this).children('.c_cook').show();
    },function(){
      $(this).children('.c_cook').hide();
    }
  );
  $('.s_movie').hover(    //ここはホバーよりクリックの方が良いと思います。
    function() {
      $(this).children('.c_movie').show();
    },function(){
      $(this).children('.c_movie').hide();
    }
  );
  $('.s_gym').hover(    //ここはホバーよりクリックの方が良いと思います。
    function() {
      $(this).children('.c_gym').show();
    },function(){
      $(this).children('.c_gym').hide();
    }
  );
  $('.s_music').hover(    //ここはホバーよりクリックの方が良いと思います。
    function() {
      $(this).children('.c_music').show();
    },function(){
      $(this).children('.c_music').hide();
    }
  );
  $('.co_1').click(    //ここはホバーよりクリックの方が良いと思います。
    function() {
        $('.sc1').show();
        $('.sc2').hide();
        $('.sc3').hide();
        $('.sc4').hide();
    }
  );
  $('.co_2').click(    //ここはホバーよりクリックの方が良いと思います。
    function() {
        $('.sc1').hide();
        $('.sc2').show();
        $('.sc3').hide();
        $('.sc4').hide();
    }
  );

});


  // カテゴリーセレクトボックスのオプションを作成
  // function appendOption(category){
  //   var html = `<option value="${category.name}" data-category="${category.id}">${category.name}</option>`;
  //   return html;
  // }
  // 子カテゴリーの表示作成
  // function appendChidrenBox(insertHTML){
  //   var childSelectHtml = '';
  //   childSelectHtml = `<div class='listing-select-wrapper__added' id= 'children_wrapper'>
  //                       <div class='listing-select-wrapper__box'>
  //                         <select class="listing-select-wrapper__box--select" id="child_category" name="category_id">
  //                           <option value="---" data-category="---">---</option>
  //                           ${insertHTML}
  //                         <select>
  //                         <i class='fas fa-chevron-down listing-select-wrapper__box--arrow-down'></i>
  //                       </div>
  //                     </div>`;
  //   $('.listing-product-detail__category').append(childSelectHtml);
  // }
  // 親カテゴリー選択後のイベント
//   $('#parent_category').on('change', function(){
//     var parentCategory = document.getElementById('parent_category').value; //選択された親カテゴリーの名前を取得
//     if (parentCategory != "---"){ //親カテゴリーが初期値でないことを確認
//       $.ajax({
//         url: 'get_category_children',
//         type: 'GET',
//         data: { parent_name: parentCategory },
//         dataType: 'json'
//       })
//       .done(function(children){
//         $('#children_wrapper').remove(); //親が変更された時、子以下を削除するする
//         $('#grandchildren_wrapper').remove();
//         $('#size_wrapper').remove();
//         $('#brand_wrapper').remove();
//         var insertHTML = '';
//         children.forEach(function(child){
//           insertHTML += appendOption(child);
//         });
//         appendChidrenBox(insertHTML);
//       })
//       .fail(function(){
//         alert('カテゴリー取得に失敗しました');
//       })
//     }else{
//       $('#children_wrapper').remove(); //親カテゴリーが初期値になった時、子以下を削除するする
//       $('#grandchildren_wrapper').remove();
//       $('#size_wrapper').remove();
//       $('#brand_wrapper').remove();
//     }
//   });
//   // 子カテゴリー選択後のイベント
//   $('.listing-product-detail__category').on('change', '#child_category', function(){
//     var childId = $('#child_category option:selected').data('category'); //選択された子カテゴリーのidを取得
//     if (childId != "---"){ //子カテゴリーが初期値でないことを確認
//       $.ajax({
//         url: 'get_category_grandchildren',
//         type: 'GET',
//         data: { child_id: childId },
//         dataType: 'json'
//       })
//       .done(function(grandchildren){
//         if (grandchildren.length != 0) {
//           $('#grandchildren_wrapper').remove(); //子が変更された時、孫以下を削除するする
//           $('#size_wrapper').remove();
//           $('#brand_wrapper').remove();
//           var insertHTML = '';
//           grandchildren.forEach(function(grandchild){
//             insertHTML += appendOption(grandchild);
//           });
//           appendGrandchidrenBox(insertHTML);
//         }
//       })
//       .fail(function(){
//         alert('カテゴリー取得に失敗しました');
//       })
//     }else{
//       $('#grandchildren_wrapper').remove(); //子カテゴリーが初期値になった時、孫以下を削除する
//       $('#size_wrapper').remove();
//       $('#brand_wrapper').remove();
//     }
//   });
// });
// 孫カテゴリーの表示作成
// function appendGrandchidrenBox(insertHTML){
//   var grandchildSelectHtml = '';
//   grandchildSelectHtml = `<div class='listing-select-wrapper__added' id= 'grandchildren_wrapper'>
//                             <div class='listing-select-wrapper__box'>
//                               <select class="listing-select-wrapper__box--select" id="grandchild_category" name="category_id">
//                                 <option value="---" data-category="---">---</option>
//                                 ${insertHTML}
//                               </select>
//                               <i class='fas fa-chevron-down listing-select-wrapper__box--arrow-down'></i>
//                             </div>
//                           </div>`;
//   $('.listing-product-detail__category').append(grandchildSelectHtml);
// }
