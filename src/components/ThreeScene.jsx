import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const ThreeScene = () => {
    const mountRef = useRef(null)

    useEffect(() => {
        const currentMount = mountRef.current

        // Scene setup
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })

        renderer.setSize(window.innerWidth, window.innerHeight)
        renderer.setPixelRatio(window.devicePixelRatio)
        currentMount.appendChild(renderer.domElement)

        // Objects
        const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16)
        const material = new THREE.MeshNormalMaterial({ wireframe: true })
        const torusKnot = new THREE.Mesh(geometry, material)
        scene.add(torusKnot)

        camera.position.z = 30

        // Animation
        const animate = () => {
            requestAnimationFrame(animate)
            torusKnot.rotation.x += 0.01
            torusKnot.rotation.y += 0.005
            renderer.render(scene, camera)
        }
        animate()

        // Resize handler
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight
            camera.updateProjectionMatrix()
            renderer.setSize(window.innerWidth, window.innerHeight)
        }
        window.addEventListener('resize', handleResize)

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize)
            currentMount.removeChild(renderer.domElement)
            geometry.dispose()
            material.dispose()
        }
    }, [])

    return (
        <div
            ref={mountRef}
            className="fixed top-0 left-0 w-full h-full -z-10 opacity-30 pointer-events-none"
        />
    )
}

export default ThreeScene
