<template>
    <div class="Other-content">
        <div class="layui-card">
            <div class="demoTable lay-mb15">
                搜索ID：
                <div class="layui-inline">
                    <input class="layui-input" name="id" id="dailyReload" autocomplete="off">
                </div>
                <button class="layui-btn" data-type="reload">搜索</button>
            </div>
            <table class="layui-hide" id="LAY_table_daily" lay-filter="user"></table>
            <div class="layui-form layui-border-box layui-table-view" lay-filter="LAY-table-1" style=" height:315px;">
            <div class="layui-table-box">
            <div class="layui-table-header">
            <table cellspacing="0" cellpadding="0" border="0" class="layui-table">
            <thead>
            <tr>
            <th data-field="0" data-unresize="true">
            <div class="layui-table-cell laytable-cell-1-0 laytable-cell-checkbox">
            <input type="checkbox" name="layTableCheckbox" lay-skin="primary" lay-filter="layTableAllChoose">
            <div class="layui-unselect layui-form-checkbox" lay-skin="primary">
        
            </div>
            </div>
            </th>
            <th data-field="id">
            <div class="layui-table-cell laytable-cell-1-id">
            <span>
            工号</span>
            <span class="layui-table-sort layui-inline">
            <i class="layui-edge layui-table-sort-asc">
            </i>
            <i class="layui-edge layui-table-sort-desc">
            </i>
            </span>
            </div>
            </th>
            <th data-field="username">
            <div class="layui-table-cell laytable-cell-1-username">
            <span>
            用户名</span>
            </div>
            </th>
            <th data-field="department">
            <div class="layui-table-cell laytable-cell-1-department">
            <span>
            部门</span>
            </div>
            </th>
            <th data-field="operation">
            <div class="layui-table-cell laytable-cell-1-operation">
            <span>
            操作</span>
            </div>
            </th>
            <th data-field="time">
            <div class="layui-table-cell laytable-cell-1-time">
            <span>
            时间</span>
            </div>
            </th>
            <th data-field="remark">
            <div class="layui-table-cell laytable-cell-1-remark">
            <span>
            备注</span>
            </div>
            </th>
            <th class="layui-table-patch">
            <div class="layui-table-cell" style="width: 25px;">
            </div>
            </th>
            </tr>
            </thead>
            </table>
            </div>
            <div class="layui-table-body layui-table-main" style="height: 233.984px;">
            <table cellspacing="0" cellpadding="0" border="0" class="layui-table">
            <tbody>
            <tr data-index="0" class="">
            <td data-field="0">
            <div class="layui-table-cell laytable-cell-1-0 laytable-cell-checkbox">
            <input type="checkbox" name="layTableCheckbox" lay-skin="primary">
            <div class="layui-unselect layui-form-checkbox" lay-skin="primary">
        
            </div>
            </div>
            </td>
            <td data-field="id">
            <div class="layui-table-cell laytable-cell-1-id">
            10000</div>
            </td>
            <td data-field="username">
            <div class="layui-table-cell laytable-cell-1-username">
            user-0</div>
            </td>
            <td data-field="department">
            <div class="layui-table-cell laytable-cell-1-department">
            研发部</div>
            </td>
            <td data-field="operation">
            <div class="layui-table-cell laytable-cell-1-operation">
            登录</div>
            </td>
            <td data-field="time">
            <div class="layui-table-cell laytable-cell-1-time">
            2018-07-06</div>
            </td>
            <td data-field="remark">
            <div class="layui-table-cell laytable-cell-1-remark">
            登录</div>
            </td>
            </tr>
            <tr data-index="1" class="">
            <td data-field="0">
            <div class="layui-table-cell laytable-cell-1-0 laytable-cell-checkbox">
            <input type="checkbox" name="layTableCheckbox" lay-skin="primary">
            <div class="layui-unselect layui-form-checkbox" lay-skin="primary">
        
            </div>
            </div>
            </td>
            <td data-field="id">
            <div class="layui-table-cell laytable-cell-1-id">
            10001</div>
            </td>
            <td data-field="username">
            <div class="layui-table-cell laytable-cell-1-username">
            user-1</div>
            </td>
            <td data-field="department">
            <div class="layui-table-cell laytable-cell-1-department">
            设计部</div>
            </td>
            <td data-field="operation">
            <div class="layui-table-cell laytable-cell-1-operation">
            退出</div>
            </td>
            <td data-field="time">
            <div class="layui-table-cell laytable-cell-1-time">
            2018-07-06</div>
            </td>
            <td data-field="remark">
            <div class="layui-table-cell laytable-cell-1-remark">
            退出</div>
            </td>
            </tr>
            <tr data-index="2" class="">
            <td data-field="0">
            <div class="layui-table-cell laytable-cell-1-0 laytable-cell-checkbox">
            <input type="checkbox" name="layTableCheckbox" lay-skin="primary">
            <div class="layui-unselect layui-form-checkbox" lay-skin="primary">
        
            </div>
            </div>
            </td>
            <td data-field="id">
            <div class="layui-table-cell laytable-cell-1-id">
            10002</div>
            </td>
            <td data-field="username">
            <div class="layui-table-cell laytable-cell-1-username">
            user-2</div>
            </td>
            <td data-field="department">
            <div class="layui-table-cell laytable-cell-1-department">
            产品部</div>
            </td>
            <td data-field="operation">
            <div class="layui-table-cell laytable-cell-1-operation">
            退出</div>
            </td>
            <td data-field="time">
            <div class="layui-table-cell laytable-cell-1-time">
            2018-07-06</div>
            </td>
            <td data-field="remark">
            <div class="layui-table-cell laytable-cell-1-remark">
            退出</div>
            </td>
            </tr>
            <tr data-index="3" class="">
            <td data-field="0">
            <div class="layui-table-cell laytable-cell-1-0 laytable-cell-checkbox">
            <input type="checkbox" name="layTableCheckbox" lay-skin="primary">
            <div class="layui-unselect layui-form-checkbox" lay-skin="primary">
        
            </div>
            </div>
            </td>
            <td data-field="id">
            <div class="layui-table-cell laytable-cell-1-id">
            10003</div>
            </td>
            <td data-field="username">
            <div class="layui-table-cell laytable-cell-1-username">
            user-3</div>
            </td>
            <td data-field="department">
            <div class="layui-table-cell laytable-cell-1-department">
            设计部</div>
            </td>
            <td data-field="operation">
            <div class="layui-table-cell laytable-cell-1-operation">
            登录</div>
            </td>
            <td data-field="time">
            <div class="layui-table-cell laytable-cell-1-time">
            2018-07-06</div>
            </td>
            <td data-field="remark">
            <div class="layui-table-cell laytable-cell-1-remark">
            登录</div>
            </td>
            </tr>
            <tr data-index="4" class="">
            <td data-field="0">
            <div class="layui-table-cell laytable-cell-1-0 laytable-cell-checkbox">
            <input type="checkbox" name="layTableCheckbox" lay-skin="primary">
            <div class="layui-unselect layui-form-checkbox" lay-skin="primary">
        
            </div>
            </div>
            </td>
            <td data-field="id">
            <div class="layui-table-cell laytable-cell-1-id">
            10004</div>
            </td>
            <td data-field="username">
            <div class="layui-table-cell laytable-cell-1-username">
            user-4</div>
            </td>
            <td data-field="department">
            <div class="layui-table-cell laytable-cell-1-department">
            服务部</div>
            </td>
            <td data-field="operation">
            <div class="layui-table-cell laytable-cell-1-operation">
            退出</div>
            </td>
            <td data-field="time">
            <div class="layui-table-cell laytable-cell-1-time">
            2018-07-06</div>
            </td>
            <td data-field="remark">
            <div class="layui-table-cell laytable-cell-1-remark">
            退出</div>
            </td>
            </tr>
            <tr data-index="5" class="">
            <td data-field="0">
            <div class="layui-table-cell laytable-cell-1-0 laytable-cell-checkbox">
            <input type="checkbox" name="layTableCheckbox" lay-skin="primary">
            <div class="layui-unselect layui-form-checkbox" lay-skin="primary">
        
            </div>
            </div>
            </td>
            <td data-field="id">
            <div class="layui-table-cell laytable-cell-1-id">
            10005</div>
            </td>
            <td data-field="username">
            <div class="layui-table-cell laytable-cell-1-username">
            user-5</div>
            </td>
            <td data-field="department">
            <div class="layui-table-cell laytable-cell-1-department">
            品牌部</div>
            </td>
            <td data-field="operation">
            <div class="layui-table-cell laytable-cell-1-operation">
            登录</div>
            </td>
            <td data-field="time">
            <div class="layui-table-cell laytable-cell-1-time">
            2018-07-06</div>
            </td>
            <td data-field="remark">
            <div class="layui-table-cell laytable-cell-1-remark">
            登录</div>
            </td>
            </tr>
            <tr data-index="6">
            <td data-field="0">
            <div class="layui-table-cell laytable-cell-1-0 laytable-cell-checkbox">
            <input type="checkbox" name="layTableCheckbox" lay-skin="primary">
            <div class="layui-unselect layui-form-checkbox" lay-skin="primary">
        
            </div>
            </div>
            </td>
            <td data-field="id">
            <div class="layui-table-cell laytable-cell-1-id">
            10006</div>
            </td>
            <td data-field="username">
            <div class="layui-table-cell laytable-cell-1-username">
            user-6</div>
            </td>
            <td data-field="department">
            <div class="layui-table-cell laytable-cell-1-department">
            产品部</div>
            </td>
            <td data-field="operation">
            <div class="layui-table-cell laytable-cell-1-operation">
            退出</div>
            </td>
            <td data-field="time">
            <div class="layui-table-cell laytable-cell-1-time">
            2018-07-06</div>
            </td>
            <td data-field="remark">
            <div class="layui-table-cell laytable-cell-1-remark">
            退出</div>
            </td>
            </tr>
            <tr data-index="7" class="">
            <td data-field="0">
            <div class="layui-table-cell laytable-cell-1-0 laytable-cell-checkbox">
            <input type="checkbox" name="layTableCheckbox" lay-skin="primary">
            <div class="layui-unselect layui-form-checkbox" lay-skin="primary">
        
            </div>
            </div>
            </td>
            <td data-field="id">
            <div class="layui-table-cell laytable-cell-1-id">
            10007</div>
            </td>
            <td data-field="username">
            <div class="layui-table-cell laytable-cell-1-username">
            user-7</div>
            </td>
            <td data-field="department">
            <div class="layui-table-cell laytable-cell-1-department">
            研发部</div>
            </td>
            <td data-field="operation">
            <div class="layui-table-cell laytable-cell-1-operation">
            退出</div>
            </td>
            <td data-field="time">
            <div class="layui-table-cell laytable-cell-1-time">
            2018-07-06</div>
            </td>
            <td data-field="remark">
            <div class="layui-table-cell laytable-cell-1-remark">
            退出</div>
            </td>
            </tr>
            <tr data-index="8" class="">
            <td data-field="0">
            <div class="layui-table-cell laytable-cell-1-0 laytable-cell-checkbox">
            <input type="checkbox" name="layTableCheckbox" lay-skin="primary">
            <div class="layui-unselect layui-form-checkbox" lay-skin="primary">
        
            </div>
            </div>
            </td>
            <td data-field="id">
            <div class="layui-table-cell laytable-cell-1-id">
            10008</div>
            </td>
            <td data-field="username">
            <div class="layui-table-cell laytable-cell-1-username">
            user-8</div>
            </td>
            <td data-field="department">
            <div class="layui-table-cell laytable-cell-1-department">
            设计部</div>
            </td>
            <td data-field="operation">
            <div class="layui-table-cell laytable-cell-1-operation">
            登录</div>
            </td>
            <td data-field="time">
            <div class="layui-table-cell laytable-cell-1-time">
            2018-07-06</div>
            </td>
            <td data-field="remark">
            <div class="layui-table-cell laytable-cell-1-remark">
            登录</div>
            </td>
            </tr>
            <tr data-index="9" class="">
            <td data-field="0">
            <div class="layui-table-cell laytable-cell-1-0 laytable-cell-checkbox">
            <input type="checkbox" name="layTableCheckbox" lay-skin="primary">
            <div class="layui-unselect layui-form-checkbox" lay-skin="primary">
        
            </div>
            </div>
            </td>
            <td data-field="id">
            <div class="layui-table-cell laytable-cell-1-id">
            10009</div>
            </td>
            <td data-field="username">
            <div class="layui-table-cell laytable-cell-1-username">
            user-9</div>
            </td>
            <td data-field="department">
            <div class="layui-table-cell laytable-cell-1-department">
            安全中心</div>
            </td>
            <td data-field="operation">
            <div class="layui-table-cell laytable-cell-1-operation">
            退出</div>
            </td>
            <td data-field="time">
            <div class="layui-table-cell laytable-cell-1-time">
            2018-07-06</div>
            </td>
            <td data-field="remark">
            <div class="layui-table-cell laytable-cell-1-remark">
            退出</div>
            </td>
            </tr>
            <tr data-index="10" class="">
            <td data-field="0">
            <div class="layui-table-cell laytable-cell-1-0 laytable-cell-checkbox">
            <input type="checkbox" name="layTableCheckbox" lay-skin="primary">
            <div class="layui-unselect layui-form-checkbox" lay-skin="primary">
        
            </div>
            </div>
            </td>
            <td data-field="id">
            <div class="layui-table-cell laytable-cell-1-id">
            10010</div>
            </td>
            <td data-field="username">
            <div class="layui-table-cell laytable-cell-1-username">
            user-10</div>
            </td>
            <td data-field="department">
            <div class="layui-table-cell laytable-cell-1-department">
            品牌部</div>
            </td>
            <td data-field="operation">
            <div class="layui-table-cell laytable-cell-1-operation">
            登录</div>
            </td>
            <td data-field="time">
            <div class="layui-table-cell laytable-cell-1-time">
            2018-07-06</div>
            </td>
            <td data-field="remark">
            <div class="layui-table-cell laytable-cell-1-remark">
            登录</div>
            </td>
            </tr>
            <tr data-index="11" class="">
            <td data-field="0">
            <div class="layui-table-cell laytable-cell-1-0 laytable-cell-checkbox">
            <input type="checkbox" name="layTableCheckbox" lay-skin="primary">
            <div class="layui-unselect layui-form-checkbox" lay-skin="primary">
        
            </div>
            </div>
            </td>
            <td data-field="id">
            <div class="layui-table-cell laytable-cell-1-id">
            10011</div>
            </td>
            <td data-field="username">
            <div class="layui-table-cell laytable-cell-1-username">
            user-11</div>
            </td>
            <td data-field="department">
            <div class="layui-table-cell laytable-cell-1-department">
            售后部</div>
            </td>
            <td data-field="operation">
            <div class="layui-table-cell laytable-cell-1-operation">
            退出</div>
            </td>
            <td data-field="time">
            <div class="layui-table-cell laytable-cell-1-time">
            2018-07-06</div>
            </td>
            <td data-field="remark">
            <div class="layui-table-cell laytable-cell-1-remark">
            退出</div>
            </td>
            </tr>
            <tr data-index="12" class="">
            <td data-field="0">
            <div class="layui-table-cell laytable-cell-1-0 laytable-cell-checkbox">
            <input type="checkbox" name="layTableCheckbox" lay-skin="primary">
            <div class="layui-unselect layui-form-checkbox" lay-skin="primary">
        
            </div>
            </div>
            </td>
            <td data-field="id">
            <div class="layui-table-cell laytable-cell-1-id">
            10012</div>
            </td>
            <td data-field="username">
            <div class="layui-table-cell laytable-cell-1-username">
            user-12</div>
            </td>
            <td data-field="department">
            <div class="layui-table-cell laytable-cell-1-department">
            客服部</div>
            </td>
            <td data-field="operation">
            <div class="layui-table-cell laytable-cell-1-operation">
            登录</div>
            </td>
            <td data-field="time">
            <div class="layui-table-cell laytable-cell-1-time">
            2018-07-06</div>
            </td>
            <td data-field="remark">
            <div class="layui-table-cell laytable-cell-1-remark">
            登录</div>
            </td>
            </tr>
            <tr data-index="13" class="">
            <td data-field="0">
            <div class="layui-table-cell laytable-cell-1-0 laytable-cell-checkbox">
            <input type="checkbox" name="layTableCheckbox" lay-skin="primary">
            <div class="layui-unselect layui-form-checkbox" lay-skin="primary">
        
            </div>
            </div>
            </td>
            <td data-field="id">
            <div class="layui-table-cell laytable-cell-1-id">
            10013</div>
            </td>
            <td data-field="username">
            <div class="layui-table-cell laytable-cell-1-username">
            user-13</div>
            </td>
            <td data-field="department">
            <div class="layui-table-cell laytable-cell-1-department">
            研发部</div>
            </td>
            <td data-field="operation">
            <div class="layui-table-cell laytable-cell-1-operation">
            退出</div>
            </td>
            <td data-field="time">
            <div class="layui-table-cell laytable-cell-1-time">
            2018-07-06</div>
            </td>
            <td data-field="remark">
            <div class="layui-table-cell laytable-cell-1-remark">
            退出</div>
            </td>
            </tr>
            <tr data-index="14">
            <td data-field="0">
            <div class="layui-table-cell laytable-cell-1-0 laytable-cell-checkbox">
            <input type="checkbox" name="layTableCheckbox" lay-skin="primary">
            <div class="layui-unselect layui-form-checkbox" lay-skin="primary">
        
            </div>
            </div>
            </td>
            <td data-field="id">
            <div class="layui-table-cell laytable-cell-1-id">
            10014</div>
            </td>
            <td data-field="username">
            <div class="layui-table-cell laytable-cell-1-username">
            user-14</div>
            </td>
            <td data-field="department">
            <div class="layui-table-cell laytable-cell-1-department">
            品牌部</div>
            </td>
            <td data-field="operation">
            <div class="layui-table-cell laytable-cell-1-operation">
            退出</div>
            </td>
            <td data-field="time">
            <div class="layui-table-cell laytable-cell-1-time">
            2018-07-06</div>
            </td>
            <td data-field="remark">
            <div class="layui-table-cell laytable-cell-1-remark">
            退出</div>
            </td>
            </tr>
            <tr data-index="15">
            <td data-field="0">
            <div class="layui-table-cell laytable-cell-1-0 laytable-cell-checkbox">
            <input type="checkbox" name="layTableCheckbox" lay-skin="primary">
            <div class="layui-unselect layui-form-checkbox" lay-skin="primary">
        
            </div>
            </div>
            </td>
            <td data-field="id">
            <div class="layui-table-cell laytable-cell-1-id">
            10015</div>
            </td>
            <td data-field="username">
            <div class="layui-table-cell laytable-cell-1-username">
            user-15</div>
            </td>
            <td data-field="department">
            <div class="layui-table-cell laytable-cell-1-department">
            设计部</div>
            </td>
            <td data-field="operation">
            <div class="layui-table-cell laytable-cell-1-operation">
            登录</div>
            </td>
            <td data-field="time">
            <div class="layui-table-cell laytable-cell-1-time">
            2018-07-06</div>
            </td>
            <td data-field="remark">
            <div class="layui-table-cell laytable-cell-1-remark">
            登录</div>
            </td>
            </tr>
            <tr data-index="16">
            <td data-field="0">
            <div class="layui-table-cell laytable-cell-1-0 laytable-cell-checkbox">
            <input type="checkbox" name="layTableCheckbox" lay-skin="primary">
            <div class="layui-unselect layui-form-checkbox" lay-skin="primary">
        
            </div>
            </div>
            </td>
            <td data-field="id">
            <div class="layui-table-cell laytable-cell-1-id">
            10016</div>
            </td>
            <td data-field="username">
            <div class="layui-table-cell laytable-cell-1-username">
            user-16</div>
            </td>
            <td data-field="department">
            <div class="layui-table-cell laytable-cell-1-department">
            研发部</div>
            </td>
            <td data-field="operation">
            <div class="layui-table-cell laytable-cell-1-operation">
            退出</div>
            </td>
            <td data-field="time">
            <div class="layui-table-cell laytable-cell-1-time">
            2018-07-06</div>
            </td>
            <td data-field="remark">
            <div class="layui-table-cell laytable-cell-1-remark">
            退出</div>
            </td>
            </tr>
            <tr data-index="17">
            <td data-field="0">
            <div class="layui-table-cell laytable-cell-1-0 laytable-cell-checkbox">
            <input type="checkbox" name="layTableCheckbox" lay-skin="primary">
            <div class="layui-unselect layui-form-checkbox" lay-skin="primary">
        
            </div>
            </div>
            </td>
            <td data-field="id">
            <div class="layui-table-cell laytable-cell-1-id">
            10017</div>
            </td>
            <td data-field="username">
            <div class="layui-table-cell laytable-cell-1-username">
            user-17</div>
            </td>
            <td data-field="department">
            <div class="layui-table-cell laytable-cell-1-department">
            销售部</div>
            </td>
            <td data-field="operation">
            <div class="layui-table-cell laytable-cell-1-operation">
            退出</div>
            </td>
            <td data-field="time">
            <div class="layui-table-cell laytable-cell-1-time">
            2018-07-06</div>
            </td>
            <td data-field="remark">
            <div class="layui-table-cell laytable-cell-1-remark">
            退出</div>
            </td>
            </tr>
            <tr data-index="18">
            <td data-field="0">
            <div class="layui-table-cell laytable-cell-1-0 laytable-cell-checkbox">
            <input type="checkbox" name="layTableCheckbox" lay-skin="primary">
            <div class="layui-unselect layui-form-checkbox" lay-skin="primary">
        
            </div>
            </div>
            </td>
            <td data-field="id">
            <div class="layui-table-cell laytable-cell-1-id">
            10018</div>
            </td>
            <td data-field="username">
            <div class="layui-table-cell laytable-cell-1-username">
            user-18</div>
            </td>
            <td data-field="department">
            <div class="layui-table-cell laytable-cell-1-department">
            市场部</div>
            </td>
            <td data-field="operation">
            <div class="layui-table-cell laytable-cell-1-operation">
            退出</div>
            </td>
            <td data-field="time">
            <div class="layui-table-cell laytable-cell-1-time">
            2018-07-06</div>
            </td>
            <td data-field="remark">
            <div class="layui-table-cell laytable-cell-1-remark">
            退出</div>
            </td>
            </tr>
            <tr data-index="19">
            <td data-field="0">
            <div class="layui-table-cell laytable-cell-1-0 laytable-cell-checkbox">
            <input type="checkbox" name="layTableCheckbox" lay-skin="primary">
            <div class="layui-unselect layui-form-checkbox" lay-skin="primary">
        
            </div>
            </div>
            </td>
            <td data-field="id">
            <div class="layui-table-cell laytable-cell-1-id">
            10019</div>
            </td>
            <td data-field="username">
            <div class="layui-table-cell laytable-cell-1-username">
            user-19</div>
            </td>
            <td data-field="department">
            <div class="layui-table-cell laytable-cell-1-department">
            研发部</div>
            </td>
            <td data-field="operation">
            <div class="layui-table-cell laytable-cell-1-operation">
            登录</div>
            </td>
            <td data-field="time">
            <div class="layui-table-cell laytable-cell-1-time">
            2018-07-06</div>
            </td>
            <td data-field="remark">
            <div class="layui-table-cell laytable-cell-1-remark">
            登录</div>
            </td>
            </tr>
            <tr data-index="20">
            <td data-field="0">
            <div class="layui-table-cell laytable-cell-1-0 laytable-cell-checkbox">
            <input type="checkbox" name="layTableCheckbox" lay-skin="primary">
            <div class="layui-unselect layui-form-checkbox" lay-skin="primary">
        
            </div>
            </div>
            </td>
            <td data-field="id">
            <div class="layui-table-cell laytable-cell-1-id">
            10020</div>
            </td>
            <td data-field="username">
            <div class="layui-table-cell laytable-cell-1-username">
            user-20</div>
            </td>
            <td data-field="department">
            <div class="layui-table-cell laytable-cell-1-department">
            安全部</div>
            </td>
            <td data-field="operation">
            <div class="layui-table-cell laytable-cell-1-operation">
            登录</div>
            </td>
            <td data-field="time">
            <div class="layui-table-cell laytable-cell-1-time">
            2018-07-06</div>
            </td>
            <td data-field="remark">
            <div class="layui-table-cell laytable-cell-1-remark">
            登录</div>
            </td>
            </tr>
            <tr data-index="21">
            <td data-field="0">
            <div class="layui-table-cell laytable-cell-1-0 laytable-cell-checkbox">
            <input type="checkbox" name="layTableCheckbox" lay-skin="primary">
            <div class="layui-unselect layui-form-checkbox" lay-skin="primary">
        
            </div>
            </div>
            </td>
            <td data-field="id">
            <div class="layui-table-cell laytable-cell-1-id">
            10021</div>
            </td>
            <td data-field="username">
            <div class="layui-table-cell laytable-cell-1-username">
            user-21</div>
            </td>
            <td data-field="department">
            <div class="layui-table-cell laytable-cell-1-department">
            后勤部</div>
            </td>
            <td data-field="operation">
            <div class="layui-table-cell laytable-cell-1-operation">
            登录</div>
            </td>
            <td data-field="time">
            <div class="layui-table-cell laytable-cell-1-time">
            2018-07-06</div>
            </td>
            <td data-field="remark">
            <div class="layui-table-cell laytable-cell-1-remark">
            登录</div>
            </td>
            </tr>
            <tr data-index="22">
            <td data-field="0">
            <div class="layui-table-cell laytable-cell-1-0 laytable-cell-checkbox">
            <input type="checkbox" name="layTableCheckbox" lay-skin="primary">
            <div class="layui-unselect layui-form-checkbox" lay-skin="primary">
        
            </div>
            </div>
            </td>
            <td data-field="id">
            <div class="layui-table-cell laytable-cell-1-id">
            10022</div>
            </td>
            <td data-field="username">
            <div class="layui-table-cell laytable-cell-1-username">
            user-22</div>
            </td>
            <td data-field="department">
            <div class="layui-table-cell laytable-cell-1-department">
            产品部</div>
            </td>
            <td data-field="operation">
            <div class="layui-table-cell laytable-cell-1-operation">
            退出</div>
            </td>
            <td data-field="time">
            <div class="layui-table-cell laytable-cell-1-time">
            2018-07-06</div>
            </td>
            <td data-field="remark">
            <div class="layui-table-cell laytable-cell-1-remark">
            退出</div>
            </td>
            </tr>
            <tr data-index="23">
            <td data-field="0">
            <div class="layui-table-cell laytable-cell-1-0 laytable-cell-checkbox">
            <input type="checkbox" name="layTableCheckbox" lay-skin="primary">
            <div class="layui-unselect layui-form-checkbox" lay-skin="primary">
        
            </div>
            </div>
            </td>
            <td data-field="id">
            <div class="layui-table-cell laytable-cell-1-id">
            10023</div>
            </td>
            <td data-field="username">
            <div class="layui-table-cell laytable-cell-1-username">
            user-23</div>
            </td>
            <td data-field="department">
            <div class="layui-table-cell laytable-cell-1-department">
            设计部</div>
            </td>
            <td data-field="operation">
            <div class="layui-table-cell laytable-cell-1-operation">
            退出</div>
            </td>
            <td data-field="time">
            <div class="layui-table-cell laytable-cell-1-time">
            2018-07-06</div>
            </td>
            <td data-field="remark">
            <div class="layui-table-cell laytable-cell-1-remark">
            退出</div>
            </td>
            </tr>
            <tr data-index="24">
            <td data-field="0">
            <div class="layui-table-cell laytable-cell-1-0 laytable-cell-checkbox">
            <input type="checkbox" name="layTableCheckbox" lay-skin="primary">
            <div class="layui-unselect layui-form-checkbox" lay-skin="primary">
        
            </div>
            </div>
            </td>
            <td data-field="id">
            <div class="layui-table-cell laytable-cell-1-id">
            10024</div>
            </td>
            <td data-field="username">
            <div class="layui-table-cell laytable-cell-1-username">
            user-24</div>
            </td>
            <td data-field="department">
            <div class="layui-table-cell laytable-cell-1-department">
            市场部</div>
            </td>
            <td data-field="operation">
            <div class="layui-table-cell laytable-cell-1-operation">
            登录</div>
            </td>
            <td data-field="time">
            <div class="layui-table-cell laytable-cell-1-time">
            2018-07-06</div>
            </td>
            <td data-field="remark">
            <div class="layui-table-cell laytable-cell-1-remark">
            登录</div>
            </td>
            </tr>
            <tr data-index="25">
            <td data-field="0">
            <div class="layui-table-cell laytable-cell-1-0 laytable-cell-checkbox">
            <input type="checkbox" name="layTableCheckbox" lay-skin="primary">
            <div class="layui-unselect layui-form-checkbox" lay-skin="primary">
        
            </div>
            </div>
            </td>
            <td data-field="id">
            <div class="layui-table-cell laytable-cell-1-id">
            10025</div>
            </td>
            <td data-field="username">
            <div class="layui-table-cell laytable-cell-1-username">
            user-25</div>
            </td>
            <td data-field="department">
            <div class="layui-table-cell laytable-cell-1-department">
            客服部</div>
            </td>
            <td data-field="operation">
            <div class="layui-table-cell laytable-cell-1-operation">
            退出</div>
            </td>
            <td data-field="time">
            <div class="layui-table-cell laytable-cell-1-time">
            2018-07-06</div>
            </td>
            <td data-field="remark">
            <div class="layui-table-cell laytable-cell-1-remark">
            退出</div>
            </td>
            </tr>
            <tr data-index="26">
            <td data-field="0">
            <div class="layui-table-cell laytable-cell-1-0 laytable-cell-checkbox">
            <input type="checkbox" name="layTableCheckbox" lay-skin="primary">
            <div class="layui-unselect layui-form-checkbox" lay-skin="primary">
        
            </div>
            </div>
            </td>
            <td data-field="id">
            <div class="layui-table-cell laytable-cell-1-id">
            10026</div>
            </td>
            <td data-field="username">
            <div class="layui-table-cell laytable-cell-1-username">
            user-26</div>
            </td>
            <td data-field="department">
            <div class="layui-table-cell laytable-cell-1-department">
            研发部</div>
            </td>
            <td data-field="operation">
            <div class="layui-table-cell laytable-cell-1-operation">
            登录</div>
            </td>
            <td data-field="time">
            <div class="layui-table-cell laytable-cell-1-time">
            2018-07-06</div>
            </td>
            <td data-field="remark">
            <div class="layui-table-cell laytable-cell-1-remark">
            登录</div>
            </td>
            </tr>
            <tr data-index="27">
            <td data-field="0">
            <div class="layui-table-cell laytable-cell-1-0 laytable-cell-checkbox">
            <input type="checkbox" name="layTableCheckbox" lay-skin="primary">
            <div class="layui-unselect layui-form-checkbox" lay-skin="primary">
        
            </div>
            </div>
            </td>
            <td data-field="id">
            <div class="layui-table-cell laytable-cell-1-id">
            10027</div>
            </td>
            <td data-field="username">
            <div class="layui-table-cell laytable-cell-1-username">
            user-27</div>
            </td>
            <td data-field="department">
            <div class="layui-table-cell laytable-cell-1-department">
            销售部</div>
            </td>
            <td data-field="operation">
            <div class="layui-table-cell laytable-cell-1-operation">
            退出</div>
            </td>
            <td data-field="time">
            <div class="layui-table-cell laytable-cell-1-time">
            2018-07-06</div>
            </td>
            <td data-field="remark">
            <div class="layui-table-cell laytable-cell-1-remark">
            退出</div>
            </td>
            </tr>
            <tr data-index="28">
            <td data-field="0">
            <div class="layui-table-cell laytable-cell-1-0 laytable-cell-checkbox">
            <input type="checkbox" name="layTableCheckbox" lay-skin="primary">
            <div class="layui-unselect layui-form-checkbox" lay-skin="primary">
        
            </div>
            </div>
            </td>
            <td data-field="id">
            <div class="layui-table-cell laytable-cell-1-id">
            10028</div>
            </td>
            <td data-field="username">
            <div class="layui-table-cell laytable-cell-1-username">
            user-28</div>
            </td>
            <td data-field="department">
            <div class="layui-table-cell laytable-cell-1-department">
            设计部</div>
            </td>
            <td data-field="operation">
            <div class="layui-table-cell laytable-cell-1-operation">
            登录</div>
            </td>
            <td data-field="time">
            <div class="layui-table-cell laytable-cell-1-time">
            2018-07-06</div>
            </td>
            <td data-field="remark">
            <div class="layui-table-cell laytable-cell-1-remark">
            登录</div>
            </td>
            </tr>
            <tr data-index="29">
            <td data-field="0">
            <div class="layui-table-cell laytable-cell-1-0 laytable-cell-checkbox">
            <input type="checkbox" name="layTableCheckbox" lay-skin="primary">
            <div class="layui-unselect layui-form-checkbox" lay-skin="primary">
        
            </div>
            </div>
            </td>
            <td data-field="id">
            <div class="layui-table-cell laytable-cell-1-id">
            10029</div>
            </td>
            <td data-field="username">
            <div class="layui-table-cell laytable-cell-1-username">
            user-29</div>
            </td>
            <td data-field="department">
            <div class="layui-table-cell laytable-cell-1-department">
            产品部</div>
            </td>
            <td data-field="operation">
            <div class="layui-table-cell laytable-cell-1-operation">
            退出</div>
            </td>
            <td data-field="time">
            <div class="layui-table-cell laytable-cell-1-time">
            2018-07-06</div>
            </td>
            <td data-field="remark">
            <div class="layui-table-cell laytable-cell-1-remark">
            退出</div>
            </td>
            </tr>
            </tbody>
            </table>
            </div>
            <div class="layui-table-fixed layui-table-fixed-l">
            <div class="layui-table-header">
            <table cellspacing="0" cellpadding="0" border="0" class="layui-table">
            <thead>
            <tr>
            <th data-field="0" data-unresize="true">
            <div class="layui-table-cell laytable-cell-1-0 laytable-cell-checkbox">
            <input type="checkbox" name="layTableCheckbox" lay-skin="primary" lay-filter="layTableAllChoose">
            <div class="layui-unselect layui-form-checkbox" lay-skin="primary">
        
            </div>
            </div>
            </th>
            <th data-field="id">
            <div class="layui-table-cell laytable-cell-1-id">
            <span>
            工号</span>
            <span class="layui-table-sort layui-inline">
            <i class="layui-edge layui-table-sort-asc">
            </i>
            <i class="layui-edge layui-table-sort-desc">
            </i>
            </span>
            </div>
            </th>
            </tr>
            </thead>
            </table>
            </div>
            <div class="layui-table-body" style="height: 209px;">
            <table cellspacing="0" cellpadding="0" border="0" class="layui-table">
            <tbody>
            <tr data-index="0" class="">
            <td data-field="0">
            <div class="layui-table-cell laytable-cell-1-0 laytable-cell-checkbox">
            <input type="checkbox" name="layTableCheckbox" lay-skin="primary">
            <div class="layui-unselect layui-form-checkbox" lay-skin="primary">
        
            </div>
            </div>
            </td>
            <td data-field="id">
            <div class="layui-table-cell laytable-cell-1-id">
            10000</div>
            </td>
            </tr>
            <tr data-index="1" class="">
            <td data-field="0">
            <div class="layui-table-cell laytable-cell-1-0 laytable-cell-checkbox">
            <input type="checkbox" name="layTableCheckbox" lay-skin="primary">
            <div class="layui-unselect layui-form-checkbox" lay-skin="primary">
        
            </div>
            </div>
            </td>
            <td data-field="id">
            <div class="layui-table-cell laytable-cell-1-id">
            10001</div>
            </td>
            </tr>
            <tr data-index="2" class="">
            <td data-field="0">
            <div class="layui-table-cell laytable-cell-1-0 laytable-cell-checkbox">
            <input type="checkbox" name="layTableCheckbox" lay-skin="primary">
            <div class="layui-unselect layui-form-checkbox" lay-skin="primary">
        
            </div>
            </div>
            </td>
            <td data-field="id">
            <div class="layui-table-cell laytable-cell-1-id">
            10002</div>
            </td>
            </tr>
            <tr data-index="3" class="">
            <td data-field="0">
            <div class="layui-table-cell laytable-cell-1-0 laytable-cell-checkbox">
            <input type="checkbox" name="layTableCheckbox" lay-skin="primary">
            <div class="layui-unselect layui-form-checkbox" lay-skin="primary">
        
            </div>
            </div>
            </td>
            <td data-field="id">
            <div class="layui-table-cell laytable-cell-1-id">
            10003</div>
            </td>
            </tr>
            <tr data-index="4" class="">
            <td data-field="0">
            <div class="layui-table-cell laytable-cell-1-0 laytable-cell-checkbox">
            <input type="checkbox" name="layTableCheckbox" lay-skin="primary">
            <div class="layui-unselect layui-form-checkbox" lay-skin="primary">
        
            </div>
            </div>
            </td>
            <td data-field="id">
            <div class="layui-table-cell laytable-cell-1-id">
            10004</div>
            </td>
            </tr>
            <tr data-index="5" class="">
            <td data-field="0">
            <div class="layui-table-cell laytable-cell-1-0 laytable-cell-checkbox">
            <input type="checkbox" name="layTableCheckbox" lay-skin="primary">
            <div class="layui-unselect layui-form-checkbox" lay-skin="primary">
        
            </div>
            </div>
            </td>
            <td data-field="id">
            <div class="layui-table-cell laytable-cell-1-id">
            10005</div>
            </td>
            </tr>
            <tr data-index="6">
            <td data-field="0">
            <div class="layui-table-cell laytable-cell-1-0 laytable-cell-checkbox">
            <input type="checkbox" name="layTableCheckbox" lay-skin="primary">
            <div class="layui-unselect layui-form-checkbox" lay-skin="primary">
        
            </div>
            </div>
            </td>
            <td data-field="id">
            <div class="layui-table-cell laytable-cell-1-id">
            10006</div>
            </td>
            </tr>
            <tr data-index="7" class="">
            <td data-field="0">
            <div class="layui-table-cell laytable-cell-1-0 laytable-cell-checkbox">
            <input type="checkbox" name="layTableCheckbox" lay-skin="primary">
            <div class="layui-unselect layui-form-checkbox" lay-skin="primary">
        
            </div>
            </div>
            </td>
            <td data-field="id">
            <div class="layui-table-cell laytable-cell-1-id">
            10007</div>
            </td>
            </tr>
            <tr data-index="8" class="">
            <td data-field="0">
            <div class="layui-table-cell laytable-cell-1-0 laytable-cell-checkbox">
            <input type="checkbox" name="layTableCheckbox" lay-skin="primary">
            <div class="layui-unselect layui-form-checkbox" lay-skin="primary">
        
            </div>
            </div>
            </td>
            <td data-field="id">
            <div class="layui-table-cell laytable-cell-1-id">
            10008</div>
            </td>
            </tr>
            <tr data-index="9" class="">
            <td data-field="0">
            <div class="layui-table-cell laytable-cell-1-0 laytable-cell-checkbox">
            <input type="checkbox" name="layTableCheckbox" lay-skin="primary">
            <div class="layui-unselect layui-form-checkbox" lay-skin="primary">
        
            </div>
            </div>
            </td>
            <td data-field="id">
            <div class="layui-table-cell laytable-cell-1-id">
            10009</div>
            </td>
            </tr>
            <tr data-index="10" class="">
            <td data-field="0">
            <div class="layui-table-cell laytable-cell-1-0 laytable-cell-checkbox">
            <input type="checkbox" name="layTableCheckbox" lay-skin="primary">
            <div class="layui-unselect layui-form-checkbox" lay-skin="primary">
        
            </div>
            </div>
            </td>
            <td data-field="id">
            <div class="layui-table-cell laytable-cell-1-id">
            10010</div>
            </td>
            </tr>
            <tr data-index="11" class="">
            <td data-field="0">
            <div class="layui-table-cell laytable-cell-1-0 laytable-cell-checkbox">
            <input type="checkbox" name="layTableCheckbox" lay-skin="primary">
            <div class="layui-unselect layui-form-checkbox" lay-skin="primary">
        
            </div>
            </div>
            </td>
            <td data-field="id">
            <div class="layui-table-cell laytable-cell-1-id">
            10011</div>
            </td>
            </tr>
            <tr data-index="12" class="">
            <td data-field="0">
            <div class="layui-table-cell laytable-cell-1-0 laytable-cell-checkbox">
            <input type="checkbox" name="layTableCheckbox" lay-skin="primary">
            <div class="layui-unselect layui-form-checkbox" lay-skin="primary">
        
            </div>
            </div>
            </td>
            <td data-field="id">
            <div class="layui-table-cell laytable-cell-1-id">
            10012</div>
            </td>
            </tr>
            <tr data-index="13" class="">
            <td data-field="0">
            <div class="layui-table-cell laytable-cell-1-0 laytable-cell-checkbox">
            <input type="checkbox" name="layTableCheckbox" lay-skin="primary">
            <div class="layui-unselect layui-form-checkbox" lay-skin="primary">
        
            </div>
            </div>
            </td>
            <td data-field="id">
            <div class="layui-table-cell laytable-cell-1-id">
            10013</div>
            </td>
            </tr>
            <tr data-index="14">
            <td data-field="0">
            <div class="layui-table-cell laytable-cell-1-0 laytable-cell-checkbox">
            <input type="checkbox" name="layTableCheckbox" lay-skin="primary">
            <div class="layui-unselect layui-form-checkbox" lay-skin="primary">
        
            </div>
            </div>
            </td>
            <td data-field="id">
            <div class="layui-table-cell laytable-cell-1-id">
            10014</div>
            </td>
            </tr>
            <tr data-index="15">
            <td data-field="0">
            <div class="layui-table-cell laytable-cell-1-0 laytable-cell-checkbox">
            <input type="checkbox" name="layTableCheckbox" lay-skin="primary">
            <div class="layui-unselect layui-form-checkbox" lay-skin="primary">
        
            </div>
            </div>
            </td>
            <td data-field="id">
            <div class="layui-table-cell laytable-cell-1-id">
            10015</div>
            </td>
            </tr>
            <tr data-index="16">
            <td data-field="0">
            <div class="layui-table-cell laytable-cell-1-0 laytable-cell-checkbox">
            <input type="checkbox" name="layTableCheckbox" lay-skin="primary">
            <div class="layui-unselect layui-form-checkbox" lay-skin="primary">
        
            </div>
            </div>
            </td>
            <td data-field="id">
            <div class="layui-table-cell laytable-cell-1-id">
            10016</div>
            </td>
            </tr>
            <tr data-index="17">
            <td data-field="0">
            <div class="layui-table-cell laytable-cell-1-0 laytable-cell-checkbox">
            <input type="checkbox" name="layTableCheckbox" lay-skin="primary">
            <div class="layui-unselect layui-form-checkbox" lay-skin="primary">
        
            </div>
            </div>
            </td>
            <td data-field="id">
            <div class="layui-table-cell laytable-cell-1-id">
            10017</div>
            </td>
            </tr>
            <tr data-index="18">
            <td data-field="0">
            <div class="layui-table-cell laytable-cell-1-0 laytable-cell-checkbox">
            <input type="checkbox" name="layTableCheckbox" lay-skin="primary">
            <div class="layui-unselect layui-form-checkbox" lay-skin="primary">
        
            </div>
            </div>
            </td>
            <td data-field="id">
            <div class="layui-table-cell laytable-cell-1-id">
            10018</div>
            </td>
            </tr>
            <tr data-index="19">
            <td data-field="0">
            <div class="layui-table-cell laytable-cell-1-0 laytable-cell-checkbox">
            <input type="checkbox" name="layTableCheckbox" lay-skin="primary">
            <div class="layui-unselect layui-form-checkbox" lay-skin="primary">
        
            </div>
            </div>
            </td>
            <td data-field="id">
            <div class="layui-table-cell laytable-cell-1-id">
            10019</div>
            </td>
            </tr>
            <tr data-index="20">
            <td data-field="0">
            <div class="layui-table-cell laytable-cell-1-0 laytable-cell-checkbox">
            <input type="checkbox" name="layTableCheckbox" lay-skin="primary">
            <div class="layui-unselect layui-form-checkbox" lay-skin="primary">
        
            </div>
            </div>
            </td>
            <td data-field="id">
            <div class="layui-table-cell laytable-cell-1-id">
            10020</div>
            </td>
            </tr>
            <tr data-index="21">
            <td data-field="0">
            <div class="layui-table-cell laytable-cell-1-0 laytable-cell-checkbox">
            <input type="checkbox" name="layTableCheckbox" lay-skin="primary">
            <div class="layui-unselect layui-form-checkbox" lay-skin="primary">
        
            </div>
            </div>
            </td>
            <td data-field="id">
            <div class="layui-table-cell laytable-cell-1-id">
            10021</div>
            </td>
            </tr>
            <tr data-index="22">
            <td data-field="0">
            <div class="layui-table-cell laytable-cell-1-0 laytable-cell-checkbox">
            <input type="checkbox" name="layTableCheckbox" lay-skin="primary">
            <div class="layui-unselect layui-form-checkbox" lay-skin="primary">
        
            </div>
            </div>
            </td>
            <td data-field="id">
            <div class="layui-table-cell laytable-cell-1-id">
            10022</div>
            </td>
            </tr>
            <tr data-index="23">
            <td data-field="0">
            <div class="layui-table-cell laytable-cell-1-0 laytable-cell-checkbox">
            <input type="checkbox" name="layTableCheckbox" lay-skin="primary">
            <div class="layui-unselect layui-form-checkbox" lay-skin="primary">
        
            </div>
            </div>
            </td>
            <td data-field="id">
            <div class="layui-table-cell laytable-cell-1-id">
            10023</div>
            </td>
            </tr>
            <tr data-index="24">
            <td data-field="0">
            <div class="layui-table-cell laytable-cell-1-0 laytable-cell-checkbox">
            <input type="checkbox" name="layTableCheckbox" lay-skin="primary">
            <div class="layui-unselect layui-form-checkbox" lay-skin="primary">
        
            </div>
            </div>
            </td>
            <td data-field="id">
            <div class="layui-table-cell laytable-cell-1-id">
            10024</div>
            </td>
            </tr>
            <tr data-index="25">
            <td data-field="0">
            <div class="layui-table-cell laytable-cell-1-0 laytable-cell-checkbox">
            <input type="checkbox" name="layTableCheckbox" lay-skin="primary">
            <div class="layui-unselect layui-form-checkbox" lay-skin="primary">
        
            </div>
            </div>
            </td>
            <td data-field="id">
            <div class="layui-table-cell laytable-cell-1-id">
            10025</div>
            </td>
            </tr>
            <tr data-index="26">
            <td data-field="0">
            <div class="layui-table-cell laytable-cell-1-0 laytable-cell-checkbox">
            <input type="checkbox" name="layTableCheckbox" lay-skin="primary">
            <div class="layui-unselect layui-form-checkbox" lay-skin="primary">
        
            </div>
            </div>
            </td>
            <td data-field="id">
            <div class="layui-table-cell laytable-cell-1-id">
            10026</div>
            </td>
            </tr>
            <tr data-index="27">
            <td data-field="0">
            <div class="layui-table-cell laytable-cell-1-0 laytable-cell-checkbox">
            <input type="checkbox" name="layTableCheckbox" lay-skin="primary">
            <div class="layui-unselect layui-form-checkbox" lay-skin="primary">
        
            </div>
            </div>
            </td>
            <td data-field="id">
            <div class="layui-table-cell laytable-cell-1-id">
            10027</div>
            </td>
            </tr>
            <tr data-index="28">
            <td data-field="0">
            <div class="layui-table-cell laytable-cell-1-0 laytable-cell-checkbox">
            <input type="checkbox" name="layTableCheckbox" lay-skin="primary">
            <div class="layui-unselect layui-form-checkbox" lay-skin="primary">
        
            </div>
            </div>
            </td>
            <td data-field="id">
            <div class="layui-table-cell laytable-cell-1-id">
            10028</div>
            </td>
            </tr>
            <tr data-index="29">
            <td data-field="0">
            <div class="layui-table-cell laytable-cell-1-0 laytable-cell-checkbox">
            <input type="checkbox" name="layTableCheckbox" lay-skin="primary">
            <div class="layui-unselect layui-form-checkbox" lay-skin="primary">
        
            </div>
            </div>
            </td>
            <td data-field="id">
            <div class="layui-table-cell laytable-cell-1-id">
            10029</div>
            </td>
            </tr>
            </tbody>
            </table>
            </div>
            </div>
            </div>
            <div class="layui-table-page">
            <div id="layui-table-page1">
            <div class="layui-box layui-laypage layui-laypage-default" id="layui-laypage-1">
            <a href="javascript:;" class="layui-laypage-prev layui-disabled" data-page="0">
            <i class="layui-icon">
            </i>
            </a>
            <span class="layui-laypage-curr">
            <em class="layui-laypage-em">
            </em>
            <em>
            1</em>
            </span>
            <a href="javascript:;" data-page="2">
            2</a>
            <a href="javascript:;" data-page="3">
            3</a>
            <span class="layui-laypage-spr">
            …</span>
            <a href="javascript:;" class="layui-laypage-last" title="尾页" data-page="100">
            100</a>
            <a href="javascript:;" class="layui-laypage-next" data-page="2">
            <i class="layui-icon">
            </i>
            </a>
            <span class="layui-laypage-skip">
            到第<input type="text" min="1" value="1" class="layui-input">
            页<button type="button" class="layui-laypage-btn">
            确定</button>
            </span>
            <span class="layui-laypage-count">
            共 1000 条</span>
            <span class="layui-laypage-limits">
            <select lay-ignore="">
            <option value="10" selected="">
            10 条/页</option>
            <option value="20">
            20 条/页</option>
            <option value="30">
            30 条/页</option>
            <option value="40">
            40 条/页</option>
            <option value="50">
            50 条/页</option>
            <option value="60">
            60 条/页</option>
            <option value="70">
            70 条/页</option>
            <option value="80">
            80 条/页</option>
            <option value="90">
            90 条/页</option>
            </select>
            </span>
            </div>
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
<style>

</style>
