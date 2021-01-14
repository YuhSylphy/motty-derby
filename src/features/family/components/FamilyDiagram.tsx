import * as React from "react";
import { useEffect, useMemo, useRef } from "react";
import * as d3 from "d3";
import * as dagreD3 from "dagre-d3";
import * as graphlib from "graphlib";

import { HorseDef } from "../core/horse";

import "./FamilyDiagram.css";
import { Edge } from "dagre-d3";

const dummyDefs: HorseDef[] = [
  { name: "ロズウェルリポート", sex: "female" },
  {
    name: "モッティサイキョウ",
    sex: "male",
    fatherName: "パイロ",
    motherName: "ロズウェルリポート",
  },
  {
    name: "ステキマリオクン",
    sex: "male",
    fatherName: "ゴールドアリュール",
    motherName: "ロズウェルリポート",
  },
  {
    name: "ゴマプリン",
    sex: "female",
    fatherName: "ジョーカプチーノ",
    motherName: "ロズウェルリポート",
  },
  {
    name: "ミタラシダンゴ",
    sex: "female",
    fatherName: "ネオユニヴァース",
    motherName: "ロズウェルリポート",
  },
  {
    name: "カントリーマアム",
    sex: "female",
    fatherName: "マンハッタンカフェ",
    motherName: "ロズウェルリポート",
  },
  {
    name: "ルマンド",
    sex: "female",
    fatherName: "ダイワメジャー",
    motherName: "ロズウェルリポート",
  },
  {
    name: "モリナガノコエダ",
    sex: "female",
    fatherName: "ジョーカプチーノ",
    motherName: "ロズウェルリポート",
  },
  {
    name: "コーヒーゼリィ",
    sex: "male",
    fatherName: "ジョーカプチーノ",
    motherName: "ロズウェルリポート",
  },
  {
    name: "スウィートポテト",
    sex: "female",
    fatherName: "エンパイアメーカー",
    motherName: "ゴマプリン",
  },
  {
    name: "ムギチャ",
    sex: "female",
    fatherName: "ジョーカプチーノ",
    motherName: "ロズウェルリポート",
  },
  {
    name: "オレノオレオクッキ",
    sex: "male",
    fatherName: "ゴールドシップ",
    motherName: "ゴマプリン",
  },
  {
    name: "ペコチャン",
    sex: "female",
    fatherName: "ルーラーシップ",
    motherName: "カントリーマアム",
  },
  {
    name: "ピノ",
    sex: "female",
    fatherName: "アグネスデジタル",
    motherName: "ゴマプリン",
  },
  {
    name: "カブキアゲ",
    sex: "male",
    fatherName: "オルフェーブル",
    motherName: "カントリーマアム",
  },
];

const prepareGraph = (defs: HorseDef[]) => {
  const nodes = new Map<string, dagreD3.Label>();
  const edges: Edge[] = [];

  defs.forEach((def) => {
    nodes.set(def.name, {
      label: def.name,
      class: `owned ${def.sex}`,
    });

    if (def.motherName) {
      if (!nodes.has(def.motherName)) {
        nodes.set(def.motherName, {
          label: def.motherName,
          class: "anothers female",
        });
      }
      edges.push({ v: def.motherName, w: def.name });
    }

    if (def.fatherName) {
      if (!nodes.has(def.fatherName)) {
        nodes.set(def.fatherName, {
          label: def.fatherName,
          class: "anothers male",
        });
      }
      edges.push({ v: def.fatherName, w: def.name });
    }
  });

  return { nodes: Array.from(nodes.entries()), edges };
};

export const FamilyDiagram: React.FC = () => {
  const d3Container = useRef<SVGSVGElement>(null!);

  const defs = useMemo(() => dummyDefs, []);
  const data = useMemo(() => prepareGraph(defs), [defs]);

  useEffect(() => {
    const g = new dagreD3.graphlib.Graph()
      .setGraph({})
      .setDefaultEdgeLabel(() => ({}));

    // Here we're setting nodeclass, which is used by our custom drawNodes function
    // below.
    data.nodes.forEach((n) => {
      g.setNode(n[0], n[1]);
    });

    g.nodes().forEach(function (v) {
      var node = g.node(v);
      // Round the corners of the nodes
      node.rx = node.ry = 5;
    });

    // Set up edges, no special attributes.
    data.edges.forEach((e) => {
      g.setEdge(e);
    });

    // Create the renderer
    var render = new dagreD3.render();
    const svg = d3.select(d3Container.current);
    const svgGroup = svg.append("g");

    // Run the renderer. This is what draws the final graph.
    render(d3.select("svg g"), (g as unknown) as graphlib.Graph);

    // Center the graph
    var xCenterOffset =
      (Number(svg.attr("width")) - (g.graph().width || 0)) / 2;
    svgGroup.attr("transform", "translate(" + xCenterOffset + ", 20)");
    svg.attr("height", (g.graph().height || 0) + 40);
  }, [d3Container, data]);

  return (
    <React.Fragment>
      <svg
        className="d3-component"
        width="100%"
        height="75vh"
        ref={d3Container}
      />
    </React.Fragment>
  );
};
