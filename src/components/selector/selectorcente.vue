<template>
    <div class="section-right">
        <div class="section-center">
            <div id="select" class="select-box">
                <div class="layui-row select-table-section">
                    <!-- <div class="select-table-label layui-col-md12 ">
                        <div class="layui-unselect layui-form-checkbox select-one layui-form-checked" data-id="10" lay-skin="primary"> <span><b>北京市</b></span><i class="layui-icon layui-icon-ok"></i></div>
                        <div class="layui-unselect layui-form-checkbox select-one layui-form-checked" data-id="11" lay-skin="primary"> <span><b>天津市</b></span><i class="layui-icon layui-icon-ok"></i></div>
                        <div class="layui-unselect layui-form-checkbox select-one" data-id="30" lay-skin="primary"> <span><b>上海市</b></span><i class="layui-icon layui-icon-ok"></i></div>
                        <div class="layui-unselect layui-form-checkbox select-one" data-id="60" lay-skin="primary"> <span><b>重庆市</b></span><i class="layui-icon layui-icon-ok"></i></div>
                    </div> -->
                    <template>
                    <el-checkbox-group 
                        v-model="checkedCities"
                        :min="1"
                        :max="2">
                        <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
                    </el-checkbox-group>
                    </template>

                </div>
                <div class="layui-row select-table-section">
                    <div class="select-table-label layui-col-md2 ">
                        <div class="layui-unselect layui-form-checkbox select-one" data-id="12" lay-skin="primary"> <span><b>河北省</b></span><i class="layui-icon layui-icon-ok"></i> </div>
                    </div>
                    <div class="select-table-content layui-col-md10">
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="1201" lay-skin="primary"> <span>石家庄市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="1202" lay-skin="primary"> <span>秦皇岛市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="1203" lay-skin="primary"> <span>唐山市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="1204" lay-skin="primary"> <span>张家口市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="1205" lay-skin="primary"> <span>廊坊市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="1206" lay-skin="primary"> <span>衡水市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="1207" lay-skin="primary"> <span>保定市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="1208" lay-skin="primary"> <span>承德市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="1209" lay-skin="primary"> <span>邢台市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="1210" lay-skin="primary"> <span>沧州市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="1211" lay-skin="primary"> <span>邯郸市</span><i class="layui-icon layui-icon-ok"></i> </div>
                    </div>
                </div>
                <div class="layui-row select-table-section">
                    <div class="select-table-label layui-col-md2 ">
                        <div class="layui-unselect layui-form-checkbox select-one" data-id="13" lay-skin="primary"> <span><b>内蒙古</b></span><i class="layui-icon layui-icon-ok"></i> </div>
                    </div>
                    <div class="select-table-content layui-col-md10">
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="1301" lay-skin="primary"> <span>呼和浩特市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="1302" lay-skin="primary"> <span>包头市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="1303" lay-skin="primary"> <span>呼伦贝尔市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="1304" lay-skin="primary"> <span>兴安盟</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="1305" lay-skin="primary"> <span>通辽市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="1306" lay-skin="primary"> <span>赤峰市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="1307" lay-skin="primary"> <span>锡林郭勒盟</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="1308" lay-skin="primary"> <span>乌兰察布市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="1309" lay-skin="primary"> <span>鄂尔多斯市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="1310" lay-skin="primary"> <span>巴彦淖尔市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="1311" lay-skin="primary"> <span>乌海市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="1312" lay-skin="primary"> <span>阿拉善盟</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="1313" lay-skin="primary"> <span>满洲里</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="1314" lay-skin="primary"> <span>二连浩特</span><i class="layui-icon layui-icon-ok"></i> </div>
                    </div>
                </div>
                <div class="layui-row select-table-section">
                    <div class="select-table-label layui-col-md2 ">
                        <div class="layui-unselect layui-form-checkbox select-one layui-form-checked" data-id="14" lay-skin="primary"> <span><b>山西省</b></span><i class="layui-icon layui-icon-ok"></i> </div>
                    </div>
                    <div class="select-table-content layui-col-md10">
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="1401" lay-skin="primary"> <span>太原市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two layui-form-checked" data-id="1402" lay-skin="primary"> <span>大同市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="1403" lay-skin="primary"> <span>阳泉市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="1404" lay-skin="primary"> <span>长治市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="1405" lay-skin="primary"> <span>晋城市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="1406" lay-skin="primary"> <span>朔州市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="1407" lay-skin="primary"> <span>忻州市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="1408" lay-skin="primary"> <span>晋中市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="1409" lay-skin="primary"> <span>临汾市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="1410" lay-skin="primary"> <span>吕梁市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="1411" lay-skin="primary"> <span>运城市</span><i class="layui-icon layui-icon-ok"></i> </div>
                    </div>
                </div>
                <div class="layui-row select-table-section">
                    <div class="select-table-label layui-col-md2 ">
                        <div class="layui-unselect layui-form-checkbox select-one" data-id="20" lay-skin="primary"> <span><b>辽宁省</b></span><i class="layui-icon layui-icon-ok"></i> </div>
                    </div>
                    <div class="select-table-content layui-col-md10">
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="2001" lay-skin="primary"> <span>沈阳市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="2002" lay-skin="primary"> <span>大连市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="2003" lay-skin="primary"> <span>鞍山市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="2004" lay-skin="primary"> <span>锦州市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="2005" lay-skin="primary"> <span>丹东市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="2006" lay-skin="primary"> <span>盘锦市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="2007" lay-skin="primary"> <span>铁岭市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="2008" lay-skin="primary"> <span>抚顺市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="2009" lay-skin="primary"> <span>营口市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="2010" lay-skin="primary"> <span>辽阳市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="2011" lay-skin="primary"> <span>阜新市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="2012" lay-skin="primary"> <span>本溪市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="2013" lay-skin="primary"> <span>朝阳市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="2014" lay-skin="primary"> <span>葫芦岛市</span><i class="layui-icon layui-icon-ok"></i> </div>
                    </div>
                </div>
                <div class="layui-row select-table-section">
                    <div class="select-table-label layui-col-md2 ">
                        <div class="layui-unselect layui-form-checkbox select-one" data-id="21" lay-skin="primary"> <span><b>吉林省</b></span><i class="layui-icon layui-icon-ok"></i> </div>
                    </div>
                    <div class="select-table-content layui-col-md10">
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="2101" lay-skin="primary"> <span>长春市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="2102" lay-skin="primary"> <span>吉林市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="2103" lay-skin="primary"> <span>四平市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="2104" lay-skin="primary"> <span>辽源市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="2105" lay-skin="primary"> <span>通化市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="2106" lay-skin="primary"> <span>白山市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="2107" lay-skin="primary"> <span>松原市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="2108" lay-skin="primary"> <span>白城市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="2109" lay-skin="primary"> <span>延边州</span><i class="layui-icon layui-icon-ok"></i> </div>
                    </div>
                </div>
                <div class="layui-row select-table-section">
                    <div class="select-table-label layui-col-md2 ">
                        <div class="layui-unselect layui-form-checkbox select-one" data-id="22" lay-skin="primary"> <span><b>黑龙江省</b></span><i class="layui-icon layui-icon-ok"></i> </div>
                    </div>
                    <div class="select-table-content layui-col-md10">
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="2201" lay-skin="primary"> <span>哈尔滨市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="2202" lay-skin="primary"> <span>齐齐哈尔市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="2203" lay-skin="primary"> <span>鸡西市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="2204" lay-skin="primary"> <span>鹤岗市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="2205" lay-skin="primary"> <span>双鸭山市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="2206" lay-skin="primary"> <span>大庆市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="2207" lay-skin="primary"> <span>伊春市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="2208" lay-skin="primary"> <span>佳木斯市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="2209" lay-skin="primary"> <span>七台河市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="2210" lay-skin="primary"> <span>牡丹江市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="2211" lay-skin="primary"> <span>黑河市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="2212" lay-skin="primary"> <span>绥化市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="2213" lay-skin="primary"> <span>大兴安岭地区</span><i class="layui-icon layui-icon-ok"></i> </div>
                    </div>
                </div>
                <div class="layui-row select-table-section">
                    <div class="select-table-label layui-col-md2 ">
                        <div class="layui-unselect layui-form-checkbox select-one" data-id="31" lay-skin="primary"> <span><b>江苏省</b></span><i class="layui-icon layui-icon-ok"></i> </div>
                    </div>
                    <div class="select-table-content layui-col-md10">
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="3101" lay-skin="primary"> <span>南京市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="3102" lay-skin="primary"> <span>苏州市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="3103" lay-skin="primary"> <span>无锡市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="3104" lay-skin="primary"> <span>镇江市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="3105" lay-skin="primary"> <span>扬州市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="3106" lay-skin="primary"> <span>南通市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="3107" lay-skin="primary"> <span>常州市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="3108" lay-skin="primary"> <span>徐州市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="3109" lay-skin="primary"> <span>连云港市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="3110" lay-skin="primary"> <span>盐城市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="3111" lay-skin="primary"> <span>淮安市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="3112" lay-skin="primary"> <span>泰州市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="3113" lay-skin="primary"> <span>宿迁市</span><i class="layui-icon layui-icon-ok"></i> </div>
                    </div>
                </div>
                <div class="layui-row select-table-section">
                    <div class="select-table-label layui-col-md2 ">
                        <div class="layui-unselect layui-form-checkbox select-one" data-id="32" lay-skin="primary"> <span><b>山东省</b></span><i class="layui-icon layui-icon-ok"></i> </div>
                    </div>
                    <div class="select-table-content layui-col-md10">
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="3201" lay-skin="primary"> <span>济南市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="3202" lay-skin="primary"> <span>青岛市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="3203" lay-skin="primary"> <span>烟台市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="3204" lay-skin="primary"> <span>淄博市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="3205" lay-skin="primary"> <span>泰安市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="3206" lay-skin="primary"> <span>潍坊市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="3207" lay-skin="primary"> <span>济宁市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="3208" lay-skin="primary"> <span>枣庄市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="3209" lay-skin="primary"> <span>德州市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="3210" lay-skin="primary"> <span>威海市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="3211" lay-skin="primary"> <span>日照市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="3212" lay-skin="primary"> <span>莱芜市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="3213" lay-skin="primary"> <span>滨州市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="3214" lay-skin="primary"> <span>东营市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="3215" lay-skin="primary"> <span>聊城市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="3216" lay-skin="primary"> <span>菏泽市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="3217" lay-skin="primary"> <span>临沂市</span><i class="layui-icon layui-icon-ok"></i> </div>
                    </div>
                </div>
                <div class="layui-row select-table-section">
                    <div class="select-table-label layui-col-md2 ">
                        <div class="layui-unselect layui-form-checkbox select-one" data-id="33" lay-skin="primary"> <span><b>安徽省</b></span><i class="layui-icon layui-icon-ok"></i> </div>
                    </div>
                    <div class="select-table-content layui-col-md10">
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="3301" lay-skin="primary"> <span>合肥市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="3302" lay-skin="primary"> <span>芜湖市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="3303" lay-skin="primary"> <span>蚌埠市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="3304" lay-skin="primary"> <span>马鞍山市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="3305" lay-skin="primary"> <span>淮北市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="3306" lay-skin="primary"> <span>铜陵市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="3307" lay-skin="primary"> <span>安庆市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="3308" lay-skin="primary"> <span>黄山市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="3309" lay-skin="primary"> <span>滁州市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="3310" lay-skin="primary"> <span>宿州市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="3311" lay-skin="primary"> <span>池州市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="3312" lay-skin="primary"> <span>淮南市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="3313" lay-skin="primary"> <span>巢湖市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="3314" lay-skin="primary"> <span>阜阳市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="3315" lay-skin="primary"> <span>六安市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="3316" lay-skin="primary"> <span>宣城市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="3317" lay-skin="primary"> <span>亳州市</span><i class="layui-icon layui-icon-ok"></i> </div>
                    </div>
                </div>
                <div class="layui-row select-table-section">
                    <div class="select-table-label layui-col-md2 ">
                        <div class="layui-unselect layui-form-checkbox select-one" data-id="34" lay-skin="primary"> <span><b>福建省</b></span><i class="layui-icon layui-icon-ok"></i> </div>
                    </div>
                    <div class="select-table-content layui-col-md10">
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="3401" lay-skin="primary"> <span>福州市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="3402" lay-skin="primary"> <span>厦门市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="3403" lay-skin="primary"> <span>漳州市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="3404" lay-skin="primary"> <span>泉州市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="3405" lay-skin="primary"> <span>莆田市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="3406" lay-skin="primary"> <span>三明市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="3407" lay-skin="primary"> <span>南平市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="3408" lay-skin="primary"> <span>龙岩市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="3409" lay-skin="primary"> <span>宁德市</span><i class="layui-icon layui-icon-ok"></i> </div>
                    </div>
                </div>
                <div class="layui-row select-table-section">
                    <div class="select-table-label layui-col-md2 ">
                        <div class="layui-unselect layui-form-checkbox select-one" data-id="35" lay-skin="primary"> <span><b>浙江省</b></span><i class="layui-icon layui-icon-ok"></i> </div>
                    </div>
                    <div class="select-table-content layui-col-md10">
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="3501" lay-skin="primary"> <span>杭州市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="3502" lay-skin="primary"> <span>宁波市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="3503" lay-skin="primary"> <span>温州市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="3504" lay-skin="primary"> <span>嘉兴市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="3505" lay-skin="primary"> <span>湖州市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="3506" lay-skin="primary"> <span>绍兴市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="3507" lay-skin="primary"> <span>金华市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="3508" lay-skin="primary"> <span>衢州市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="3509" lay-skin="primary"> <span>舟山市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="3510" lay-skin="primary"> <span>台州市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="3511" lay-skin="primary"> <span>丽水市</span><i class="layui-icon layui-icon-ok"></i> </div>
                    </div>
                </div>
                <div class="layui-row select-table-section">
                    <div class="select-table-label layui-col-md2 ">
                        <div class="layui-unselect layui-form-checkbox select-one" data-id="36" lay-skin="primary"> <span><b>江西省</b></span><i class="layui-icon layui-icon-ok"></i> </div>
                    </div>
                    <div class="select-table-content layui-col-md10">
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="3601" lay-skin="primary"> <span>南昌市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="3602" lay-skin="primary"> <span>景德镇市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="3603" lay-skin="primary"> <span>萍乡市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="3604" lay-skin="primary"> <span>九江市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="3605" lay-skin="primary"> <span>新余市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="3606" lay-skin="primary"> <span>鹰潭市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="3607" lay-skin="primary"> <span>赣州市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="3608" lay-skin="primary"> <span>吉安市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="3609" lay-skin="primary"> <span>宜春市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="3610" lay-skin="primary"> <span>抚州市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="3611" lay-skin="primary"> <span>上饶市</span><i class="layui-icon layui-icon-ok"></i> </div>
                    </div>
                </div>
                <div class="layui-row select-table-section">
                    <div class="select-table-label layui-col-md2 ">
                        <div class="layui-unselect layui-form-checkbox select-one" data-id="40" lay-skin="primary"> <span><b>广东省</b></span><i class="layui-icon layui-icon-ok"></i> </div>
                    </div>
                    <div class="select-table-content layui-col-md10">
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="4001" lay-skin="primary"> <span>广州市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="4002" lay-skin="primary"> <span>深圳市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="4003" lay-skin="primary"> <span>珠海市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="4004" lay-skin="primary"> <span>汕头市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="4005" lay-skin="primary"> <span>韶关市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="4006" lay-skin="primary"> <span>河源市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="4007" lay-skin="primary"> <span>梅州市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="4008" lay-skin="primary"> <span>惠州市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="4009" lay-skin="primary"> <span>汕尾市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="4010" lay-skin="primary"> <span>东莞市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="4011" lay-skin="primary"> <span>中山市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="4012" lay-skin="primary"> <span>江门市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="4013" lay-skin="primary"> <span>佛山市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="4014" lay-skin="primary"> <span>阳江市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="4015" lay-skin="primary"> <span>湛江市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="4016" lay-skin="primary"> <span>茂名市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="4017" lay-skin="primary"> <span>肇庆市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="4018" lay-skin="primary"> <span>清远市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="4019" lay-skin="primary"> <span>潮州市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="4020" lay-skin="primary"> <span>揭阳市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="4021" lay-skin="primary"> <span>云浮市</span><i class="layui-icon layui-icon-ok"></i> </div>
                    </div>
                </div>
                <div class="layui-row select-table-section">
                    <div class="select-table-label layui-col-md2 ">
                        <div class="layui-unselect layui-form-checkbox select-one" data-id="41" lay-skin="primary"> <span><b>广西</b></span><i class="layui-icon layui-icon-ok"></i> </div>
                    </div>
                    <div class="select-table-content layui-col-md10">
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="4101" lay-skin="primary"> <span>南宁市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="4102" lay-skin="primary"> <span>柳州市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="4103" lay-skin="primary"> <span>桂林市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="4104" lay-skin="primary"> <span>梧州市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="4105" lay-skin="primary"> <span>北海市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="4106" lay-skin="primary"> <span>防城港市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="4107" lay-skin="primary"> <span>钦州市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="4108" lay-skin="primary"> <span>贵港市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="4109" lay-skin="primary"> <span>玉林市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="4110" lay-skin="primary"> <span>百色市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="4111" lay-skin="primary"> <span>贺州市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="4112" lay-skin="primary"> <span>河池市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="4113" lay-skin="primary"> <span>来宾市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="4114" lay-skin="primary"> <span>崇左市</span><i class="layui-icon layui-icon-ok"></i> </div>
                    </div>
                </div>
                <div class="layui-row select-table-section">
                    <div class="select-table-label layui-col-md2 ">
                        <div class="layui-unselect layui-form-checkbox select-one" data-id="42" lay-skin="primary"> <span><b>海南省</b></span><i class="layui-icon layui-icon-ok"></i> </div>
                    </div>
                    <div class="select-table-content layui-col-md10">
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="4201" lay-skin="primary"> <span>海口市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="4202" lay-skin="primary"> <span>三亚市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="4203" lay-skin="primary"> <span>琼海市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="4204" lay-skin="primary"> <span>儋州市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="4205" lay-skin="primary"> <span>文昌市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="4206" lay-skin="primary"> <span>东方市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="4207" lay-skin="primary"> <span>五指山市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="4208" lay-skin="primary"> <span>万宁市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="4209" lay-skin="primary"> <span>定安县</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="4210" lay-skin="primary"> <span>屯昌县</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="4211" lay-skin="primary"> <span>澄迈县</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="4212" lay-skin="primary"> <span>临高县</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="4213" lay-skin="primary"> <span>陵水县</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="4214" lay-skin="primary"> <span>琼中县</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="4215" lay-skin="primary"> <span>保亭县</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="4216" lay-skin="primary"> <span>乐东县</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="4217" lay-skin="primary"> <span>昌江县</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="4218" lay-skin="primary"> <span>白沙县</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="4219" lay-skin="primary"> <span>洋浦</span><i class="layui-icon layui-icon-ok"></i> </div>
                    </div>
                </div>
                <div class="layui-row select-table-section">
                    <div class="select-table-label layui-col-md2 ">
                        <div class="layui-unselect layui-form-checkbox select-one" data-id="61" lay-skin="primary"> <span><b>四川省</b></span><i class="layui-icon layui-icon-ok"></i> </div>
                    </div>
                    <div class="select-table-content layui-col-md10">
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="6101" lay-skin="primary"> <span>成都市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="6102" lay-skin="primary"> <span>德阳市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="6103" lay-skin="primary"> <span>绵阳市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="6104" lay-skin="primary"> <span>眉山市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="6105" lay-skin="primary"> <span>泸州市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="6106" lay-skin="primary"> <span>南充市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="6107" lay-skin="primary"> <span>自贡市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="6108" lay-skin="primary"> <span>内江市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="6109" lay-skin="primary"> <span>宜宾市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="6110" lay-skin="primary"> <span>乐山市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="6111" lay-skin="primary"> <span>雅安市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="6112" lay-skin="primary"> <span>遂宁市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="6113" lay-skin="primary"> <span>达州市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="6114" lay-skin="primary"> <span>巴中市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="6115" lay-skin="primary"> <span>广元市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="6116" lay-skin="primary"> <span>广安市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="6117" lay-skin="primary"> <span>资阳市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="6118" lay-skin="primary"> <span>阿坝州</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="6119" lay-skin="primary"> <span>攀枝花市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="6120" lay-skin="primary"> <span>甘孜州</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="6121" lay-skin="primary"> <span>凉山州</span><i class="layui-icon layui-icon-ok"></i> </div>
                    </div>
                </div>
                <div class="layui-row select-table-section">
                    <div class="select-table-label layui-col-md2 ">
                        <div class="layui-unselect layui-form-checkbox select-one" data-id="62" lay-skin="primary"> <span><b>云南省</b></span><i class="layui-icon layui-icon-ok"></i> </div>
                    </div>
                    <div class="select-table-content layui-col-md10">
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="6201" lay-skin="primary"> <span>昆明市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="6202" lay-skin="primary"> <span>曲靖市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="6203" lay-skin="primary"> <span>玉溪市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="6204" lay-skin="primary"> <span>昭通市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="6205" lay-skin="primary"> <span>楚雄州</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="6206" lay-skin="primary"> <span>红河哈尼族州</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="6207" lay-skin="primary"> <span>丽江市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="6208" lay-skin="primary"> <span>迪庆州</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="6209" lay-skin="primary"> <span>文山州</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="6210" lay-skin="primary"> <span>西双版纳州</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="6211" lay-skin="primary"> <span>普洱市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="6212" lay-skin="primary"> <span>大理</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="6213" lay-skin="primary"> <span>保山市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="6214" lay-skin="primary"> <span>德宏</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="6215" lay-skin="primary"> <span>怒江</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="6216" lay-skin="primary"> <span>临沧市</span><i class="layui-icon layui-icon-ok"></i> </div>
                    </div>
                </div>
                <div class="layui-row select-table-section">
                    <div class="select-table-label layui-col-md2 ">
                        <div class="layui-unselect layui-form-checkbox select-one" data-id="63" lay-skin="primary"> <span><b>贵州省</b></span><i class="layui-icon layui-icon-ok"></i> </div>
                    </div>
                    <div class="select-table-content layui-col-md10">
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="6301" lay-skin="primary"> <span>贵阳市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="6302" lay-skin="primary"> <span>遵义市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="6303" lay-skin="primary"> <span>六盘水市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="6304" lay-skin="primary"> <span>安顺市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="6305" lay-skin="primary"> <span>黔西南</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="6306" lay-skin="primary"> <span>黔南</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="6307" lay-skin="primary"> <span>铜仁地区</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="6308" lay-skin="primary"> <span>毕节地区</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="6309" lay-skin="primary"> <span>黔东南</span><i class="layui-icon layui-icon-ok"></i> </div>
                    </div>
                </div>
                <div class="layui-row select-table-section">
                    <div class="select-table-label layui-col-md2 ">
                        <div class="layui-unselect layui-form-checkbox select-one" data-id="64" lay-skin="primary"> <span><b>西藏</b></span><i class="layui-icon layui-icon-ok"></i> </div>
                    </div>
                    <div class="select-table-content layui-col-md10">
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="6401" lay-skin="primary"> <span>拉萨市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="6402" lay-skin="primary"> <span>日喀则地区</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="6403" lay-skin="primary"> <span>山南地区</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="6404" lay-skin="primary"> <span>林芝地区</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="6405" lay-skin="primary"> <span>昌都地区</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="6406" lay-skin="primary"> <span>那曲地区</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="6407" lay-skin="primary"> <span>阿里地区</span><i class="layui-icon layui-icon-ok"></i> </div>
                    </div>
                </div>
                <div class="layui-row select-table-section">
                    <div class="select-table-label layui-col-md2 ">
                        <div class="layui-unselect layui-form-checkbox select-one" data-id="70" lay-skin="primary"> <span><b>河南省</b></span><i class="layui-icon layui-icon-ok"></i> </div>
                    </div>
                    <div class="select-table-content layui-col-md10">
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="7001" lay-skin="primary"> <span>郑州</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="7002" lay-skin="primary"> <span>洛阳市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="7003" lay-skin="primary"> <span>开封市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="7004" lay-skin="primary"> <span>安阳市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="7005" lay-skin="primary"> <span>新乡市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="7006" lay-skin="primary"> <span>濮阳市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="7007" lay-skin="primary"> <span>焦作市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="7008" lay-skin="primary"> <span>鹤壁市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="7009" lay-skin="primary"> <span>三门峡市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="7010" lay-skin="primary"> <span>商丘市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="7011" lay-skin="primary"> <span>许昌市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="7012" lay-skin="primary"> <span>漯河市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="7013" lay-skin="primary"> <span>平顶山市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="7014" lay-skin="primary"> <span>驻马店市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="7015" lay-skin="primary"> <span>周口市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="7016" lay-skin="primary"> <span>南阳市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="7017" lay-skin="primary"> <span>信阳市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="7018" lay-skin="primary"> <span>济源市</span><i class="layui-icon layui-icon-ok"></i> </div>
                    </div>
                </div>
                <div class="layui-row select-table-section">
                    <div class="select-table-label layui-col-md2 ">
                        <div class="layui-unselect layui-form-checkbox select-one" data-id="71" lay-skin="primary"> <span><b>湖北省</b></span><i class="layui-icon layui-icon-ok"></i> </div>
                    </div>
                    <div class="select-table-content layui-col-md10">
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="7101" lay-skin="primary"> <span>武汉市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="7102" lay-skin="primary"> <span>黄石市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="7103" lay-skin="primary"> <span>襄阳市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="7104" lay-skin="primary"> <span>十堰市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="7105" lay-skin="primary"> <span>荆州市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="7106" lay-skin="primary"> <span>宜昌市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="7107" lay-skin="primary"> <span>荆门市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="7108" lay-skin="primary"> <span>鄂州市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="7109" lay-skin="primary"> <span>孝感市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="7110" lay-skin="primary"> <span>黄冈市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="7111" lay-skin="primary"> <span>咸宁市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="7112" lay-skin="primary"> <span>随州市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="7113" lay-skin="primary"> <span>恩施</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="7114" lay-skin="primary"> <span>潜江市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="7115" lay-skin="primary"> <span>仙桃市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="7116" lay-skin="primary"> <span>天门市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="7117" lay-skin="primary"> <span>神农架林区</span><i class="layui-icon layui-icon-ok"></i> </div>
                    </div>
                </div>
                <div class="layui-row select-table-section">
                    <div class="select-table-label layui-col-md2 ">
                        <div class="layui-unselect layui-form-checkbox select-one" data-id="72" lay-skin="primary"> <span><b>湖南省</b></span><i class="layui-icon layui-icon-ok"></i> </div>
                    </div>
                    <div class="select-table-content layui-col-md10">
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="7201" lay-skin="primary"> <span>长沙市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="7202" lay-skin="primary"> <span>株洲市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="7203" lay-skin="primary"> <span>湘潭市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="7204" lay-skin="primary"> <span>衡阳市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="7205" lay-skin="primary"> <span>益阳市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="7206" lay-skin="primary"> <span>常德市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="7207" lay-skin="primary"> <span>岳阳市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="7208" lay-skin="primary"> <span>邵阳市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="7209" lay-skin="primary"> <span>郴州市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="7210" lay-skin="primary"> <span>娄底市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="7211" lay-skin="primary"> <span>永州市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="7212" lay-skin="primary"> <span>怀化市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="7213" lay-skin="primary"> <span>张家界市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="7214" lay-skin="primary"> <span>湘西</span><i class="layui-icon layui-icon-ok"></i> </div>
                    </div>
                </div>
                <div class="layui-row select-table-section">
                    <div class="select-table-label layui-col-md2 ">
                        <div class="layui-unselect layui-form-checkbox select-one" data-id="80" lay-skin="primary"> <span><b>陕西省</b></span><i class="layui-icon layui-icon-ok"></i> </div>
                    </div>
                    <div class="select-table-content layui-col-md10">
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="8001" lay-skin="primary"> <span>西安市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="8002" lay-skin="primary"> <span>宝鸡市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="8003" lay-skin="primary"> <span>咸阳市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="8004" lay-skin="primary"> <span>渭南市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="8005" lay-skin="primary"> <span>延安市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="8006" lay-skin="primary"> <span>榆林市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="8007" lay-skin="primary"> <span>铜川市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="8008" lay-skin="primary"> <span>汉中市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="8009" lay-skin="primary"> <span>安康市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="8010" lay-skin="primary"> <span>商洛市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="8011" lay-skin="primary"> <span>杨凌</span><i class="layui-icon layui-icon-ok"></i> </div>
                    </div>
                </div>
                <div class="layui-row select-table-section">
                    <div class="select-table-label layui-col-md2 ">
                        <div class="layui-unselect layui-form-checkbox select-one" data-id="81" lay-skin="primary"> <span><b>青海省</b></span><i class="layui-icon layui-icon-ok"></i> </div>
                    </div>
                    <div class="select-table-content layui-col-md10">
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="8101" lay-skin="primary"> <span>西宁市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="8102" lay-skin="primary"> <span>海东地区</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="8103" lay-skin="primary"> <span>海南州</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="8104" lay-skin="primary"> <span>海北州</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="8105" lay-skin="primary"> <span>海西蒙古族州</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="8106" lay-skin="primary"> <span>黄南州</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="8107" lay-skin="primary"> <span>果洛州</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="8108" lay-skin="primary"> <span>玉树州</span><i class="layui-icon layui-icon-ok"></i> </div>
                    </div>
                </div>
                <div class="layui-row select-table-section">
                    <div class="select-table-label layui-col-md2 ">
                        <div class="layui-unselect layui-form-checkbox select-one" data-id="82" lay-skin="primary"> <span><b>宁夏</b></span><i class="layui-icon layui-icon-ok"></i> </div>
                    </div>
                    <div class="select-table-content layui-col-md10">
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="8201" lay-skin="primary"> <span>银川市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="8202" lay-skin="primary"> <span>石嘴山市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="8203" lay-skin="primary"> <span>吴忠市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="8204" lay-skin="primary"> <span>固原市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="8205" lay-skin="primary"> <span>中卫市</span><i class="layui-icon layui-icon-ok"></i> </div>
                    </div>
                </div>
                <div class="layui-row select-table-section">
                    <div class="select-table-label layui-col-md2 ">
                        <div class="layui-unselect layui-form-checkbox select-one" data-id="83" lay-skin="primary"> <span><b>新疆</b></span><i class="layui-icon layui-icon-ok"></i> </div>
                    </div>
                    <div class="select-table-content layui-col-md10">
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="8301" lay-skin="primary"> <span>乌鲁木齐市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="8302" lay-skin="primary"> <span>伊犁州</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="8303" lay-skin="primary"> <span>阿勒泰地区</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="8304" lay-skin="primary"> <span>塔城地区</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="8305" lay-skin="primary"> <span>博尔塔拉</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="8306" lay-skin="primary"> <span>昌吉</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="8307" lay-skin="primary"> <span>吐鲁番地区</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="8308" lay-skin="primary"> <span>巴音郭楞</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="8309" lay-skin="primary"> <span>哈密地区</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="8310" lay-skin="primary"> <span>和田地区</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="8311" lay-skin="primary"> <span>阿克苏地区</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="8312" lay-skin="primary"> <span>克孜勒苏</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="8313" lay-skin="primary"> <span>喀什地区</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="8314" lay-skin="primary"> <span>克拉玛依市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="8315" lay-skin="primary"> <span>石河子市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="8316" lay-skin="primary"> <span>五家渠市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="8317" lay-skin="primary"> <span>阿拉尔市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="8318" lay-skin="primary"> <span>图木舒克市</span><i class="layui-icon layui-icon-ok"></i> </div>
                    </div>
                </div>
                <div class="layui-row select-table-section">
                    <div class="select-table-label layui-col-md2 ">
                        <div class="layui-unselect layui-form-checkbox select-one" data-id="84" lay-skin="primary"> <span><b>甘肃省</b></span><i class="layui-icon layui-icon-ok"></i> </div>
                    </div>
                    <div class="select-table-content layui-col-md10">
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="8401" lay-skin="primary"> <span>兰州市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="8402" lay-skin="primary"> <span>天水市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="8403" lay-skin="primary"> <span>嘉峪关市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="8404" lay-skin="primary"> <span>武威市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="8405" lay-skin="primary"> <span>金昌市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="8406" lay-skin="primary"> <span>酒泉市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="8407" lay-skin="primary"> <span>张掖市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="8408" lay-skin="primary"> <span>庆阳市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="8409" lay-skin="primary"> <span>平凉市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="8410" lay-skin="primary"> <span>白银市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="8411" lay-skin="primary"> <span>定西市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="8412" lay-skin="primary"> <span>陇南市</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="8413" lay-skin="primary"> <span>临夏</span><i class="layui-icon layui-icon-ok"></i> </div>
                        <div class="layui-unselect layui-form-checkbox select-two" data-id="8414" lay-skin="primary"> <span>甘南州</span><i class="layui-icon layui-icon-ok"></i> </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<script>
  const cityOptions = ['上海', '北京', '广州', '深圳'];
  export default {
    data() {
      return {
        checkedCities: ['上海', '北京'],
        cities: cityOptions
      };
    }
  };
</script>
<style>
    @import url(../../assets/css/selector);
</style>
