"use client";

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Gentong(props) {
    const { nodes, materials } = useGLTF("/gentong.glb");
    return (
        <group {...props} dispose={null}>
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials.M_Ceramica}
            rotation={[Math.PI / 2, 0, 0]}
        />
        </group>
    );
}

useGLTF.preload("/gentong.glb");

export default Gentong