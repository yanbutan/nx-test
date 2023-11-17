import register from 'preact-custom-element'
import Navbar from "./navbar"

register(Navbar, 'acme-alert', ['type'], { shadow: true });