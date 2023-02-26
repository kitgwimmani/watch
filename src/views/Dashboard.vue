<script>
export default {
    data() {
        return {
            candidates: [
                { id: '1', file_name: "/lp_logo.png", name: "Peter Obi", party: "LP", votes: "13,567,875", percentage: "61.67" },
                { id: '2', file_name: "/pdp_logo.png", name: "Atiku Abubakar", party: "PDP", votes: "6,453,232", percentage: "29.33" },
                { id: '3', file_name: "/apc_logo.png", name: "Bola Ahmed Tinubu", party: "APC", votes: "2,400,754", percentage: "10.91" }
            ]
        }
    }
}

</script>
<style>
.card_background {
    text-align: center;
    background-image: linear-gradient(160deg, #ffffff 40%, #ecfaf7 65%);
    padding: 20px;
    border-radius: 10px;
}

.mapContainer {
    position: relative;
    width: 100px;
    height: 280px;
    overflow: hidden;
    
}

.mapContent {
    position: absolute;
    top: -60px;
    left: 10px;
    width: 1500px;
    height: 1000px;
}
</style>
<template>
    <div>
        <v-container class="bg-surface-variant">
            <h2>Dashboard</h2>
            <p>Presidential Results</p>
            <v-row no-gutters>
                <v-col v-for="candidate in candidates" :key="candidate.id" cols="12" sm="4">
                    <v-sheet class="ma-2 pa-6 card_background">
                        <v-row no-gutters>
                            <v-col cols="2">
                                <v-sheet class="align-center">
                                    <v-img :src="candidate.file_name" height="50px" cover></v-img>
                                </v-sheet>
                                <center>
                                    <h5>{{ candidate.party }}</h5>
                                </center>
                            </v-col>
                            <v-col>
                                <v-sheet class="pa-2 ma-2" style=" background-color: transparent;">
                                    <h4>{{ candidate.name }}</h4>
                                    <v-progress-linear :model-value="candidate.percentage"></v-progress-linear>
                                    <h4>{{ candidate.percentage }} %</h4>
                                    <span style="font-size:smaller; color: #555;">{{ candidate.votes }}</span>

                                </v-sheet>
                            </v-col>
                        </v-row>

                    </v-sheet>
                </v-col>
            </v-row>

        </v-container>

        <v-container>
            <v-row no-gutters>

                <v-col cols="12" sm="4" class="mapContainer">
                    <iframe src="map/test.html" scrolling="no" frameborder="0" class="mapContent"></iframe>
                </v-col>

                <v-col cols="12" sm="4">
                    
                </v-col>
                <v-col cols="12" sm="4">
                    
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

