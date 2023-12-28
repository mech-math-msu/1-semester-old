function draw() {
    draw_sum_of_vectors();
    draw_vector_multiplied_by_value();
    draw_ratio();
    draw_beatiful();
    //draw_desargues_theorem();
}

function draw_desargues_theorem() {
    JXG.Options.label.autoPosition = true;
    JXG.Options.text.fontSize = 24;

    var board = JXG.JSXGraph.initBoard("desargues", {boundingbox: [-5,5,5,-5], axis:false, showCopyright:false, showNavigation:false});

    var r = board.create('point', [-4, -2], {name:'r'});
    var r1 = board.create('point', [-1.5, -2.5], {name:'', color: 'blue'});
    var r2 = board.create('point', [-1.5, -1.7], {name:'', color: 'blue'});
    var r3 = board.create('point', [-1.5, -0.5], {name:'', color: 'blue'});

    var l1 = board.create('line', [r, r1], {straightFirst: false, name: 'g_1', withLabel: true, label: {position: 'rt', offset: [-10, 0]}});
    var l2 = board.create('line', [r, r2], {straightFirst: false, name: 'g_2', withLabel: true, label: {position: 'rt', offset: [-10, 10]}});
    var l3 = board.create('line', [r, r3], {straightFirst: false, name: 'g_3', withLabel: true, label: {position: 'rt', offset: [-10, 0]}});

    var p1 = board.create('glider', [-1, -2, l1], {name:'p_1'});
    var p2 = board.create('glider', [0.5, -2, l2], {name:'p_2'});
    var p3 = board.create('glider', [-0.5, 0, l3], {name:'p_3'});

    var q1 = board.create('glider', [0.75, -2, l1], {name:'q_1'});

    var s1 = board.create('segment', [p1, p2], {color: 'black'});
    var s2 = board.create('segment', [p1, p3], {color: 'black'});
    var s3 = board.create('segment', [p2, p3], {color: 'red'});

    var par1 = board.create('parallel', [s1, q1], {visible: false});
    var par2 = board.create('parallel', [s2, q1], {visible: false});

    var q2 = board.create('intersection', [par1, l2], {name:'q_2', color: 'black'});
    var q3 = board.create('intersection', [par2, l3], {name:'q_3', color: 'black'});

    var s4 = board.create('segment', [q1, q2], {color: 'black'});
    var s5 = board.create('segment', [q1, q3], {color: 'black'});
    var s6 = board.create('segment', [q2, q3], {color: 'red'});
    }

function draw_beatiful() {
    var brd6=JXG.JSXGraph.initBoard('beautiful',{boundingbox:[-3,3,3,-3], keepaspectratio:true, showCopyright: false, showNavigation: false});
    var A = brd6.create('point',[0.55,0]);
    var B = brd6.create('point',[1,1]);
    var C = brd6.create('point',[2,-1]);
    var D = brd6.create('point',[2,2]);
    var E = brd6.create('point',[0.3,-2]);
    var con = brd6.create('conic',[A,B,C,D,E]);
}

function draw_ratio() {
    var board = JXG.JSXGraph.initBoard('ratio', {boundingBox: [-10, -10, 10, 10], showCopyright: false});
    var A = board.create('point', [-5, 5], {withLabel: true, name:'A'});
    var B = board.create('point', [4, -4], {withLabel: true, name:'B'});
    var AB = board.create('arrow', [A, B], {withLabel: false});
    var ticks = board.create('ticks', [AB], {ticksDistance: 2});
    var t = board.create('glider', [-2, 0, AB], {name: 'C', label: {offset: [20, 0]}});
    var txt = board.create('text', [1, 2, function() { return "\\(\\lambda = \\frac{AC}{CB} = \\)" + t.position.toFixed(2); }], {"fontSize": 20});

}

function draw_sum_of_vectors()
{
    var board = JXG.JSXGraph.initBoard('sum', {boundingBox: [-10, -10, 10, 10], showCopyright: false});
    var A = board.create('point', [-7.0, 5.0]);
    var B = board.create('point', [-4.0, -6.0]);
    var C = board.create('point', [7.0, -3.0]);
    var AB = board.create('arrow', [A, B]);
    var labelAB = board.create('midpoint', [AB], {withLabel: true, name: 'a', color: 'none'})
    var BC = board.create('arrow', [B, C]);
    var labelBC = board.create('midpoint', [BC], {withLabel: true, name: 'b', color: 'none'})
    var AC = board.create('arrow', [A, C]);
    var labelAC = board.create('midpoint', [AC], {withLabel: true, name: 'a + b', color: 'none', label: {offset: [10, -10]}})

}

function draw_vector_multiplied_by_value()
{
    JXG.Options.text.useMathJax = true;
    var board = JXG.JSXGraph.initBoard('mult', {boundingBox: [-10, -10, 10, 10], showCopyright: false});
    var A = board.create('point', [-2.5, 1.0]);
    //var txt = board.create('text', [1, 2, function() { return "\\(\\lambda = \\)" + t.position.toFixed(2); }]);

    var sl = board.create('slider', [[-7, 8], [5, 8], [-7, 5, 10]], {
  baseline: { strokeColor: 'rgb(255, 0, 0)'},
  highline: { strokeColor: 'yellow'},
  fillColor: 'yellow',
  label: {
             fontSize: 20,
             display: 'html',
             cssStyle: 'font-family: MJXZERO, MJXTEX',
             offset: [-10, -5]
        },
  suffixLabel: '\\(\\lambda = \\)',
  postLabel: ''

});
    var t = board.create('transform', [function(){ return sl.Value(); }, function(){ return -sl.Value(); }], {type: 'translate'})
    var C = board.create('point', [A, t]);
    //var ac = board.create('line', [A, C]);
    var AC = board.create('arrow', [A, C]);
    //var t = board.create('glider', [-2, 0, AC], {name: 't'});
    

}