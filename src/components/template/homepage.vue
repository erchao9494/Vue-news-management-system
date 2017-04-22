<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
    }
    .layout-logo{
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }
    .layout-nav{
        width: 420px;
        margin: 0 auto;
    }
    .layout-assistant{
        width: 200px;
        height: inherit;
        float:right;
        margin-right:15px;
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .layout-content{
        height: 550px;
        margin: 15px;
       /* overflow: hidden;*/
        background: #fff;
        border-radius: 4px;
    }
    .layout-content-main{
        padding: 10px;
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
</style>
<template>
    <div class="layout">
        <Menu mode="horizontal" active-name="1">
            <div class="layout-logo"><p>New Day</p></div>
            <div class="layout-assistant">
                <div style="width:200px;height:60px;background:red;"></div> 
            </div>
        </Menu>
        <div class="layout-content">
            <Row>
                <i-col span="5">
                    <Menu active-name="1-2" width="auto" :open-names="['1']" style="height:550px;">
                        <Submenu name="1">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                                导航一
                            </template>
                            <router-link to="/Homepage/"><Menu-item name="1-1">选项 1</Menu-item></router-link>
                            <router-link to="/setup"><Menu-item name="1-2">选项 2</Menu-item></router-link>
                       
                            <Menu-item name="1-3">选项 3</Menu-item>
                        </Submenu>
                        <Submenu name="2">
                            <template slot="title">
                                <Icon type="ios-keypad"></Icon>
                                导航二
                            </template>
                            <Menu-item name="2-1">选项 1</Menu-item>
                            <Menu-item name="2-2">选项 2</Menu-item>
                        </Submenu>
                        <Submenu name="3">
                            <template slot="title">
                                <Icon type="ios-analytics"></Icon>
                                导航三
                            </template>
                            <Menu-item name="3-1">选项 1</Menu-item>
                            <Menu-item name="3-2">选项 2</Menu-item>
                        </Submenu>
                    </Menu>
                </i-col>
                <i-col span="19">
                    <div class="layout-content-main" style="height:550px;">
                        <transition name="move" mode="out-in"><router-view></router-view></transition>
                    </div>
                </i-col>
            </Row>
        </div>
        <div class="layout-copy">
            2011-2016 &copy; TalkingData
        </div>
    </div>
</template>
<script>
    export default {
        
    }
</script>