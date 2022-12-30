<template>
    <div class="ht-tab-wrap ht-tab-menu">
        <ul class="nav nav-tabs wow move-up" id="myTabOne" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="one-tab" data-bs-toggle="tab" data-bs-target="#one-tab-pane" type="button" role="tab" aria-controls="one-tab-pane" aria-selected="true">FEATURED</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="two-tab" data-bs-toggle="tab" data-bs-target="#two-tab-pane" type="button" role="tab" aria-controls="two-tab-pane" aria-selected="false">OUR MISSION</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="three-tab" data-bs-toggle="tab" data-bs-target="#three-tab-pane" type="button" role="tab" aria-controls="three-tab-pane" aria-selected="false">NEW FRIENDLY SUPPORT</button>
            </li>
        </ul>
        <div class="tab-content" id="myTabContentOne">
            <div class="tab-pane fade show active" id="one-tab-pane" role="tabpanel" aria-labelledby="one-tab" tabindex="0">
                <TabContentOne />
            </div>
            <div class="tab-pane fade" id="two-tab-pane" role="tabpanel" aria-labelledby="two-tab" tabindex="0">
                <TabContentTwo />
            </div>
            <div class="tab-pane fade" id="three-tab-pane" role="tabpanel" aria-labelledby="three-tab" tabindex="0">
                <TabContentThree />
            </div>
        </div>
    </div>
</template>

<script>
    import TabContentOne from '../components/TabContentOne'
    import TabContentTwo from '../components/TabContentTwo'
    import TabContentThree from '../components/TabContentThree'

    export default {
        components: {
            TabContentOne,
            TabContentTwo,
            TabContentThree
        }
    }
</script>