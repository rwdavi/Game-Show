const wrapperContent = `
class PythonFunctions: pass

setattr(PythonFunctions, 'map', map)
setattr(PythonFunctions, 'filter', filter)
setattr(PythonFunctions, 'set', set)


_P5_INSTANCE = None

_CTX_MIDDLE = None
_DEFAULT_FILL = None
_DEFAULT_LEADMULT = None
_DEFAULT_STROKE = None
_DEFAULT_TEXT_FILL = None

ADD = None
ALT = None
ARROW = None
AUDIO = None
AUTO = None
AXES = None
BACKSPACE = None
BASELINE = None
BEVEL = None
BEZIER = None
BLEND = None
BLUR = None
BOLD = None
BOLDITALIC = None
BOTTOM = None
BURN = None
CENTER = None
CHORD = None
CLAMP = None
CLOSE = None
CONTROL = None
CORNER = None
CORNERS = None
CROSS = None
CURVE = None
DARKEST = None
DEG_TO_RAD = None
DEGREES = None
DELETE = None
DIFFERENCE = None
DILATE = None
DODGE = None
DOWN_ARROW = None
ENTER = None
ERODE = None
ESCAPE = None
EXCLUSION = None
FILL = None
GRAY = None
GRID = None
HALF_PI = None
HAND = None
HARD_LIGHT = None
HSB = None
HSL = None
IMAGE = None
IMMEDIATE = None
INVERT = None
ITALIC = None
LANDSCAPE = None
LEFT = None
LEFT_ARROW = None
LIGHTEST = None
LINE_LOOP = None
LINE_STRIP = None
LINEAR = None
LINES = None
MIRROR = None
MITER = None
MOVE = None
MULTIPLY = None
NEAREST = None
NORMAL = None
OPAQUE = None
OPEN = None
OPTION = None
OVERLAY = None
PI = None
PIE = None
POINTS = None
PORTRAIT = None
POSTERIZE = None
PROJECT = None
QUAD_STRIP = None
QUADRATIC = None
QUADS = None
QUARTER_PI = None
RAD_TO_DEG = None
RADIANS = None
RADIUS = None
REPEAT = None
REPLACE = None
RETURN = None
RGB = None
RIGHT = None
RIGHT_ARROW = None
ROUND = None
SCREEN = None
SHIFT = None
SOFT_LIGHT = None
SQUARE = None
STROKE = None
SUBTRACT = None
TAB = None
TAU = None
TEXT = None
TEXTURE = None
THRESHOLD = None
TOP = None
TRIANGLE_FAN = None
TRIANGLE_STRIP = None
TRIANGLES = None
TWO_PI = None
UP_ARROW = None
VIDEO = None
WAIT = None
WEBGL = None
P2D = None
PI = None

frameCount = None
focused = None
displayWidth = None
displayHeight = None
windowWidth = None
windowHeight = None
width = None
height = None
deviceOrientation = None
accelerationX = None
accelerationY = None
accelerationZ = None
pAccelerationX = None
pAccelerationY = None
pAccelerationZ = None
rotationX = None
rotationY = None
rotationZ = None
pRotationX = None
pRotationY = None
pRotationZ = None
turnAxis = None
keyIsPressed = None
key = None
keyCode = None
mouseX = None
mouseY = None
pmouseX = None
pmouseY = None
winMouseX = None
winMouseY = None
pwinMouseX = None
pwinMouseY = None
mouseButton = None
mouseIsPressed = None
touches = None
pixels = None


def alpha(*args):
    return _P5_INSTANCE.alpha(*args)

def blue(*args):
    return _P5_INSTANCE.blue(*args)

def brightness(*args):
    return _P5_INSTANCE.brightness(*args)

def color(*args):
    return _P5_INSTANCE.color(*args)

def green(*args):
    return _P5_INSTANCE.green(*args)

def hue(*args):
    return _P5_INSTANCE.hue(*args)

def lerpColor(*args):
    return _P5_INSTANCE.lerpColor(*args)

def lightness(*args):
    return _P5_INSTANCE.lightness(*args)

def red(*args):
    return _P5_INSTANCE.red(*args)

def saturation(*args):
    return _P5_INSTANCE.saturation(*args)

def background(*args):
    return _P5_INSTANCE.background(*args)

def clear(*args):
    p5_clear = _P5_INSTANCE.clear(*args)
    return p5_clear

def erase(*args):
    return _P5_INSTANCE.erase(*args)

def noErase(*args):
    return _P5_INSTANCE.noErase(*args)

def colorMode(*args):
    return _P5_INSTANCE.colorMode(*args)

def fill(*args):
    return _P5_INSTANCE.fill(*args)

def noFill(*args):
    return _P5_INSTANCE.noFill(*args)

def noStroke(*args):
    return _P5_INSTANCE.noStroke(*args)

def stroke(*args):
    return _P5_INSTANCE.stroke(*args)

def arc(*args):
    return _P5_INSTANCE.arc(*args)

def ellipse(*args):
    return _P5_INSTANCE.ellipse(*args)

def circle(*args):
    return _P5_INSTANCE.circle(*args)

def line(*args):
    return _P5_INSTANCE.line(*args)

def point(*args):
    return _P5_INSTANCE.point(*args)

def quad(*args):
    return _P5_INSTANCE.quad(*args)

def rect(*args):
    return _P5_INSTANCE.rect(*args)

def square(*args):
    return _P5_INSTANCE.square(*args)

def triangle(*args):
    return _P5_INSTANCE.triangle(*args)

def plane(*args):
    return _P5_INSTANCE.plane(*args)

def box(*args):
    return _P5_INSTANCE.box(*args)

def sphere(*args):
    return _P5_INSTANCE.sphere(*args)

def cylinder(*args):
    return _P5_INSTANCE.cylinder(*args)

def cone(*args):
    return _P5_INSTANCE.cone(*args)

def ellipsoid(*args):
    return _P5_INSTANCE.ellipsoid(*args)

def torus(*args):
    return _P5_INSTANCE.torus(*args)

def loadModel(*args):
    return _P5_INSTANCE.loadModel(*args)

def model(*args):
    return _P5_INSTANCE.model(*args)

def ellipseMode(*args):
    return _P5_INSTANCE.ellipseMode(*args)

def noSmooth(*args):
    return _P5_INSTANCE.noSmooth(*args)

def rectMode(*args):
    return _P5_INSTANCE.rectMode(*args)

def smooth(*args):
    return _P5_INSTANCE.smooth(*args)

def strokeCap(*args):
    return _P5_INSTANCE.strokeCap(*args)

def strokeJoin(*args):
    return _P5_INSTANCE.strokeJoin(*args)

def strokeWeight(*args):
    return _P5_INSTANCE.strokeWeight(*args)

def bezier(*args):
    return _P5_INSTANCE.bezier(*args)

def bezierDetail(*args):
    return _P5_INSTANCE.bezierDetail(*args)

def bezierPoint(*args):
    return _P5_INSTANCE.bezierPoint(*args)

def bezierTangent(*args):
    return _P5_INSTANCE.bezierTangent(*args)

def curve(*args):
    return _P5_INSTANCE.curve(*args)

def curveDetail(*args):
    return _P5_INSTANCE.curveDetail(*args)

def curveTightness(*args):
    return _P5_INSTANCE.curveTightness(*args)

def curvePoint(*args):
    return _P5_INSTANCE.curvePoint(*args)

def curveTangent(*args):
    return _P5_INSTANCE.curveTangent(*args)

def beginContour(*args):
    return _P5_INSTANCE.beginContour(*args)

def beginShape(*args):
    return _P5_INSTANCE.beginShape(*args)

def bezierVertex(*args):
    return _P5_INSTANCE.bezierVertex(*args)

def curveVertex(*args):
    return _P5_INSTANCE.curveVertex(*args)

def endContour(*args):
    return _P5_INSTANCE.endContour(*args)

def endShape(*args):
    return _P5_INSTANCE.endShape(*args)

def quadraticVertex(*args):
    return _P5_INSTANCE.quadraticVertex(*args)

def vertex(*args):
    return _P5_INSTANCE.vertex(*args)

def cursor(*args):
    return _P5_INSTANCE.cursor(*args)

def frameRate(*args):
    return _P5_INSTANCE.frameRate(*args)

def noCursor(*args):
    return _P5_INSTANCE.noCursor(*args)

def fullscreen(*args):
    return _P5_INSTANCE.fullscreen(*args)

def pixelDensity(*args):
    return _P5_INSTANCE.pixelDensity(*args)

def displayDensity(*args):
    return _P5_INSTANCE.displayDensity(*args)

def getURL(*args):
    return _P5_INSTANCE.getURL(*args)

def getURLPath(*args):
    return _P5_INSTANCE.getURLPath(*args)

def getURLParams(*args):
    return _P5_INSTANCE.getURLParams(*args)

def remove(*args):
    return _P5_INSTANCE.remove(*args)

def noLoop(*args):
    return _P5_INSTANCE.noLoop(*args)

def loop(*args):
    return _P5_INSTANCE.loop(*args)

def push(*args):
    return _P5_INSTANCE.push(*args)

def redraw(*args):
    return _P5_INSTANCE.redraw(*args)

def resizeCanvas(*args):
    return _P5_INSTANCE.resizeCanvas(*args)

def noCanvas(*args):
    return _P5_INSTANCE.noCanvas(*args)

def createGraphics(*args):
    return _P5_INSTANCE.createGraphics(*args)

def blendMode(*args):
    return _P5_INSTANCE.blendMode(*args)

def setAttributes(*args):
    return _P5_INSTANCE.setAttributes(*args)

def applyMatrix(*args):
    return _P5_INSTANCE.applyMatrix(*args)

def resetMatrix(*args):
    return _P5_INSTANCE.resetMatrix(*args)

def rotate(*args):
    return _P5_INSTANCE.rotate(*args)

def rotateX(*args):
    return _P5_INSTANCE.rotateX(*args)

def rotateY(*args):
    return _P5_INSTANCE.rotateY(*args)

def rotateZ(*args):
    return _P5_INSTANCE.rotateZ(*args)

def scale(*args):
    return _P5_INSTANCE.scale(*args)

def shearX(*args):
    return _P5_INSTANCE.shearX(*args)

def shearY(*args):
    return _P5_INSTANCE.shearY(*args)

def translate(*args):
    return _P5_INSTANCE.translate(*args)

def createStringDict(*args):
    return _P5_INSTANCE.createStringDict(*args)

def createNumberDict(*args):
    return _P5_INSTANCE.createNumberDict(*args)

def append(*args):
    return _P5_INSTANCE.append(*args)

def arrayCopy(*args):
    return _P5_INSTANCE.arrayCopy(*args)

def concat(*args):
    return _P5_INSTANCE.concat(*args)

def reverse(*args):
    return _P5_INSTANCE.reverse(*args)

def shorten(*args):
    return _P5_INSTANCE.shorten(*args)

def shuffle(*args):
    return _P5_INSTANCE.shuffle(*args)

def sort(*args):
    return _P5_INSTANCE.sort(*args)

def splice(*args):
    return _P5_INSTANCE.splice(*args)

def subset(*args):
    return _P5_INSTANCE.subset(*args)

def float(*args):
    return _P5_INSTANCE.float(*args)

def int(*args):
    return _P5_INSTANCE.int(*args)

def str(*args):
    return _P5_INSTANCE.str(*args)

def boolean(*args):
    return _P5_INSTANCE.boolean(*args)

def byte(*args):
    return _P5_INSTANCE.byte(*args)

def char(*args):
    return _P5_INSTANCE.char(*args)

def unchar(*args):
    return _P5_INSTANCE.unchar(*args)

def hex(*args):
    return _P5_INSTANCE.hex(*args)

def unhex(*args):
    return _P5_INSTANCE.unhex(*args)

def join(*args):
    return _P5_INSTANCE.join(*args)

def match(*args):
    return _P5_INSTANCE.match(*args)

def matchAll(*args):
    return _P5_INSTANCE.matchAll(*args)

def nf(*args):
    return _P5_INSTANCE.nf(*args)

def nfc(*args):
    return _P5_INSTANCE.nfc(*args)

def nfp(*args):
    return _P5_INSTANCE.nfp(*args)

def nfs(*args):
    return _P5_INSTANCE.nfs(*args)

def split(*args):
    return _P5_INSTANCE.split(*args)

def splitTokens(*args):
    return _P5_INSTANCE.splitTokens(*args)

def trim(*args):
    return _P5_INSTANCE.trim(*args)

def setMoveThreshold(*args):
    return _P5_INSTANCE.setMoveThreshold(*args)

def setShakeThreshold(*args):
    return _P5_INSTANCE.setShakeThreshold(*args)

def keyIsDown(*args):
    return _P5_INSTANCE.keyIsDown(*args)

def createImage(*args):
    return _P5_INSTANCE.createImage(*args)

def saveCanvas(*args):
    return _P5_INSTANCE.saveCanvas(*args)

def saveFrames(*args):
    return _P5_INSTANCE.saveFrames(*args)

def loadImage(*args):
    return _P5_INSTANCE.loadImage(*args)

def image(*args):
    return _P5_INSTANCE.image(*args)

def tint(*args):
    return _P5_INSTANCE.tint(*args)

def noTint(*args):
    return _P5_INSTANCE.noTint(*args)

def imageMode(*args):
    return _P5_INSTANCE.imageMode(*args)

def blend(*args):
    return _P5_INSTANCE.blend(*args)

def copy(*args):
    return _P5_INSTANCE.copy(*args)

def filter(*args):
    if len(args) > 1 and (args[0] is None or callable(args[0])):
        return PythonFunctions.filter(*args)
    else:
        return _P5_INSTANCE.filter(*args)

def get(*args):
    return _P5_INSTANCE.get(*args)

def loadPixels(*args):
    return _P5_INSTANCE.loadPixels(*args)

def set(*args):
    if len(args) <= 1:
        return PythonFunctions.set(*args)
    else:
        return _P5_INSTANCE.set(*args)

def updatePixels(*args):
    return _P5_INSTANCE.updatePixels(*args)

def loadJSON(*args):
    return _P5_INSTANCE.loadJSON(*args)

def loadStrings(*args):
    return _P5_INSTANCE.loadStrings(*args)

def loadTable(*args):
    return _P5_INSTANCE.loadTable(*args)

def loadXML(*args):
    return _P5_INSTANCE.loadXML(*args)

def loadBytes(*args):
    return _P5_INSTANCE.loadBytes(*args)

def httpGet(*args):
    return _P5_INSTANCE.httpGet(*args)

def httpPost(*args):
    return _P5_INSTANCE.httpPost(*args)

def httpDo(*args):
    return _P5_INSTANCE.httpDo(*args)

def createWriter(*args):
    return _P5_INSTANCE.createWriter(*args)

def save(*args):
    return _P5_INSTANCE.save(*args)

def saveJSON(*args):
    return _P5_INSTANCE.saveJSON(*args)

def saveStrings(*args):
    return _P5_INSTANCE.saveStrings(*args)

def saveTable(*args):
    return _P5_INSTANCE.saveTable(*args)

def day(*args):
    return _P5_INSTANCE.day(*args)

def hour(*args):
    return _P5_INSTANCE.hour(*args)

def minute(*args):
    return _P5_INSTANCE.minute(*args)

def millis(*args):
    return _P5_INSTANCE.millis(*args)

def month(*args):
    return _P5_INSTANCE.month(*args)

def second(*args):
    return _P5_INSTANCE.second(*args)

def year(*args):
    return _P5_INSTANCE.year(*args)

def createVector(*args):
    return _P5_INSTANCE.createVector(*args)

def abs(*args):
    return _P5_INSTANCE.abs(*args)

def ceil(*args):
    return _P5_INSTANCE.ceil(*args)

def constrain(*args):
    return _P5_INSTANCE.constrain(*args)

def dist(*args):
    return _P5_INSTANCE.dist(*args)

def exp(*args):
    return _P5_INSTANCE.exp(*args)

def floor(*args):
    return _P5_INSTANCE.floor(*args)

def lerp(*args):
    return _P5_INSTANCE.lerp(*args)

def log(*args):
    return _P5_INSTANCE.log(*args)

def mag(*args):
    return _P5_INSTANCE.mag(*args)

def map(*args):
    if len(args) > 1 and callable(args[0]):
        return PythonFunctions.map(*args)
    else:
        return _P5_INSTANCE.map(*args)

def max(*args):
    return _P5_INSTANCE.max(*args)

def min(*args):
    return _P5_INSTANCE.min(*args)

def norm(*args):
    return _P5_INSTANCE.norm(*args)

def pow(*args):
    return _P5_INSTANCE.pow(*args)

def round(*args):
    return _P5_INSTANCE.round(*args)

def sq(*args):
    return _P5_INSTANCE.sq(*args)

def sqrt(*args):
    return _P5_INSTANCE.sqrt(*args)

def noise(*args):
    return _P5_INSTANCE.noise(*args)

def noiseDetail(*args):
    return _P5_INSTANCE.noiseDetail(*args)

def noiseSeed(*args):
    return _P5_INSTANCE.noiseSeed(*args)

def randomSeed(*args):
    return _P5_INSTANCE.randomSeed(*args)

def random(*args):
    return _P5_INSTANCE.random(*args)

def randomGaussian(*args):
    return _P5_INSTANCE.randomGaussian(*args)

def acos(*args):
    return _P5_INSTANCE.acos(*args)

def asin(*args):
    return _P5_INSTANCE.asin(*args)

def atan(*args):
    return _P5_INSTANCE.atan(*args)

def atan2(*args):
    return _P5_INSTANCE.atan2(*args)

def cos(*args):
    return _P5_INSTANCE.cos(*args)

def sin(*args):
    return _P5_INSTANCE.sin(*args)

def tan(*args):
    return _P5_INSTANCE.tan(*args)

def degrees(*args):
    return _P5_INSTANCE.degrees(*args)

def radians(*args):
    return _P5_INSTANCE.radians(*args)

def angleMode(*args):
    return _P5_INSTANCE.angleMode(*args)

def textAlign(*args):
    return _P5_INSTANCE.textAlign(*args)

def textLeading(*args):
    return _P5_INSTANCE.textLeading(*args)

def textSize(*args):
    return _P5_INSTANCE.textSize(*args)

def textStyle(*args):
    return _P5_INSTANCE.textStyle(*args)

def textWidth(*args):
    return _P5_INSTANCE.textWidth(*args)

def textAscent(*args):
    return _P5_INSTANCE.textAscent(*args)

def textDescent(*args):
    return _P5_INSTANCE.textDescent(*args)

def loadFont(*args):
    return _P5_INSTANCE.loadFont(*args)

def text(*args):
    return _P5_INSTANCE.text(*args)

def textFont(*args):
    return _P5_INSTANCE.textFont(*args)

def orbitControl(*args):
    return _P5_INSTANCE.orbitControl(*args)

def debugMode(*args):
    return _P5_INSTANCE.debugMode(*args)

def noDebugMode(*args):
    return _P5_INSTANCE.noDebugMode(*args)

def ambientLight(*args):
    return _P5_INSTANCE.ambientLight(*args)

def directionalLight(*args):
    return _P5_INSTANCE.directionalLight(*args)

def pointLight(*args):
    return _P5_INSTANCE.pointLight(*args)

def lights(*args):
    return _P5_INSTANCE.lights(*args)

def loadShader(*args):
    return _P5_INSTANCE.loadShader(*args)

def createShader(*args):
    return _P5_INSTANCE.createShader(*args)

def shader(*args):
    return _P5_INSTANCE.shader(*args)

def resetShader(*args):
    return _P5_INSTANCE.resetShader(*args)

def normalMaterial(*args):
    return _P5_INSTANCE.normalMaterial(*args)

def texture(*args):
    return _P5_INSTANCE.texture(*args)

def textureMode(*args):
    return _P5_INSTANCE.textureMode(*args)

def textureWrap(*args):
    return _P5_INSTANCE.textureWrap(*args)

def ambientMaterial(*args):
    return _P5_INSTANCE.ambientMaterial(*args)

def specularMaterial(*args):
    return _P5_INSTANCE.specularMaterial(*args)

def shininess(*args):
    return _P5_INSTANCE.shininess(*args)

def camera(*args):
    return _P5_INSTANCE.camera(*args)

def perspective(*args):
    return _P5_INSTANCE.perspective(*args)

def ortho(*args):
    return _P5_INSTANCE.ortho(*args)

def createCamera(*args):
    return _P5_INSTANCE.createCamera(*args)

def setCamera(*args):
    return _P5_INSTANCE.setCamera(*args)

def select(*args):
    return _P5_INSTANCE.select(*args)

def selectAll(*args):
    return _P5_INSTANCE.selectAll(*args)

def removeElements(*args):
    return _P5_INSTANCE.removeElements(*args)

def changed(*args):
    return _P5_INSTANCE.changed(*args)

def input(*args):
    return _P5_INSTANCE.input(*args)

def createDiv(*args):
    return _P5_INSTANCE.createDiv(*args)

def createP(*args):
    return _P5_INSTANCE.createP(*args)

def createSpan(*args):
    return _P5_INSTANCE.createSpan(*args)

def createImg(*args):
    return _P5_INSTANCE.createImg(*args)

def createA(*args):
    return _P5_INSTANCE.createA(*args)

def createSlider(*args):
    return _P5_INSTANCE.createSlider(*args)

def createButton(*args):
    return _P5_INSTANCE.createButton(*args)

def createCheckbox(*args):
    return _P5_INSTANCE.createCheckbox(*args)

def createSelect(*args):
    return _P5_INSTANCE.createSelect(*args)

def createRadio(*args):
    return _P5_INSTANCE.createRadio(*args)

def createColorPicker(*args):
    return _P5_INSTANCE.createColorPicker(*args)

def createInput(*args):
    return _P5_INSTANCE.createInput(*args)

def createFileInput(*args):
    return _P5_INSTANCE.createFileInput(*args)

def createVideo(*args):
    return _P5_INSTANCE.createVideo(*args)

def createAudio(*args):
    return _P5_INSTANCE.createAudio(*args)

def createCapture(*args):
    return _P5_INSTANCE.createCapture(*args)

def createElement(*args):
    return _P5_INSTANCE.createElement(*args)

def createCanvas(*args):
    canvas = _P5_INSTANCE.createCanvas(*args)

    global width, height
    width = _P5_INSTANCE.width
    height = _P5_INSTANCE.height

    return canvas

def __deviceMoved(e):
  try:
    _bind_event_function(deviceMoved, e)
  except NameError:
    pass

def __deviceTurned(e):
  try:
    _bind_event_function(deviceTurned, e)
  except NameError:
    pass

def __deviceShaken(e):
  try:
    _bind_event_function(deviceShaken, e)
  except NameError:
    pass

def __touchEnded(e):
  try:
    _bind_event_function(deviceShaken, e)
  except NameError:
    pass

def __touchStarted(e):
  try:
    _bind_event_function(touchStarted, e)
  except NameError:
    pass

def __windowResized(e):
  try:
    _bind_event_function(windowResized, e)
  except NameError:
    pass

def __touchMoved(e):
  try:
    _bind_event_function(touchMoved, e)
  except NameError:
    pass

def __mouseMoved(e):
  try:
    _bind_event_function(mouseMoved, e)
  except NameError:
    pass

def __mouseDragged(e):
  try:
    _bind_event_function(mouseDragged, e)
  except NameError:
      pass

def __mousePressed(e):
  try:
    _bind_event_function(mousePressed, e)
  except NameError:
    pass

def __mouseReleased(e):
  try:
    _bind_event_function(mouseReleased, e)
  except NameError:
    pass

def __mouseClicked(e):
  try:
    _bind_event_function(mouseClicked, e)
  except NameError:
    pass

def __doubleClicked(e):
  try:
    _bind_event_function(doubleClicked, e)
  except NameError:
    pass

def __mouseWheel(e):
  try:
    _bind_event_function(mouseWheel, e)
  except NameError:
    pass

def __keyPressed(e):
  try:
    _bind_event_function(keyPressed, e)
  except NameError:
    pass

def __keyReleased(e):
  try:
    _bind_event_function(keyReleased, e)
  except NameError:
    pass

def __keyTyped(e):
  try:
    _bind_event_function(keyTyped, e)
  except NameError:
    pass

def __keyIsDown(e):
  try:
    _bind_event_function(keyIsDown, e)
  except NameError:
    pass

def pop(*args):
    p5_pop = _P5_INSTANCE.pop(*args)
    return p5_pop


# Processing Python or Java mode compatibility aliases
size = createCanvas
popMatrix = pop
popStyle = pop
pushMatrix = push
pushStyle = push

# PVector is a wrapper/helper class for p5.Vector objets
# providing names similar to Processing Python or Java modes
# but mostly keeping p5js functionality

from numbers import Number

class PVector:

    def __init__(self, x=0, y=0, z=0):
        self.__vector = createVector(x, y, z)
        self.add = self.__instance_add__
        self.sub = self.__instance_sub__
        self.mult = self.__instance_mult__
        self.div = self.__instance_div__
        self.cross = self.__instance_cross__
        self.dist = self.__instance_dist__
        self.dot = self.__instance_dot__
        self.lerp = self.__instance_lerp__

    @property
    def x(self):
        return self.__vector.x

    @x.setter
    def x(self, x):
        self.__vector.x = x

    @property
    def y(self):
        return self.__vector.y

    @y.setter
    def y(self, y):
        self.__vector.y = y

    @property
    def z(self):
        return self.__vector.z

    @z.setter
    def z(self, z):
        self.__vector.z = z

    def mag(self):
        return self.__vector.mag()

    def magSq(self):
        return self.__vector.magSq()

    def setMag(self, mag):
        self.__vector.setMag(mag)
        return self

    def normalize(self):
        self.__vector.normalize()
        return self

    def limit(self, max):
        self.__vector.limit(max)
        return self

    def heading(self):
        return self.__vector.heading()

    def rotate(self, angle):
        self.__vector.rotate(angle)
        return self

    def __instance_add__(self, *args):
        if len(args) == 1:
            return PVector.add(self, args[0], self)
        else:
            return PVector.add(self, PVector(*args), self)

    def __instance_sub__(self, *args):
        if len(args) == 1:
            return PVector.sub(self, args[0], self)
        else:
            return PVector.sub(self, PVector(*args), self)

    def __instance_mult__(self, o):
        return PVector.mult(self, o, self)

    def __instance_div__(self, f):
        return PVector.div(self, f, self)

    def __instance_cross__(self, o):
        return PVector.cross(self, o, self)

    def __instance_dist__(self, o):
        return PVector.dist(self, o)

    def __instance_dot__(self, *args):
        if len(args) == 1:
            v = args[0]
        else:
            v = args
        return self.x * v[0] + self.y * v[1] + self.z * v[2]

    def __instance_lerp__(self, *args):
        if len(args) == 2:
            return PVector.lerp(self, args[0], args[1], self)
        else:
            vx, vy, vz, f = args
            return PVector.lerp(self, PVector(vx, vy, vz), f, self)

    def get(self):
        return PVector(self.x, self.y, self.z)

    def copy(self):
        return PVector(self.x, self.y, self.z)

    def __getitem__(self, k):
        return getattr(self, ('x', 'y', 'z')[k])

    def __setitem__(self, k, v):
        setattr(self, ('x', 'y', 'z')[k], v)

    def __copy__(self):
        return PVector(self.x, self.y, self.z)

    def __deepcopy__(self, memo):
        return PVector(self.x, self.y, self.z)

    def __repr__(self):  # PROVISÓRIO
        return f'PVector({self.x}, {self.y}, {self.z})'

    def set(self, *args):
        """
        Sets the x, y, and z component of the vector using two or three separate
        variables, the data from a p5.Vector, or the values from a float array.
        """
        self.__vector.set(*args)

    @classmethod
    def add(cls, a, b, dest=None):
        if dest is None:
            return PVector(a.x + b[0], a.y + b[1], a.z + b[2])
        dest.__vector.set(a.x + b[0], a.y + b[1], a.z + b[2])
        return dest

    @classmethod
    def sub(cls, a, b, dest=None):
        if dest is None:
            return PVector(a.x - b[0], a.y - b[1], a.z - b[2])
        dest.__vector.set(a.x - b[0], a.y - b[1], a.z - b[2])
        return dest

    @classmethod
    def mult(cls, a, b, dest=None):
        if dest is None:
            return PVector(a.x * b, a.y * b, a.z * b)
        dest.__vector.set(a.x * b, a.y * b, a.z * b)
        return dest

    @classmethod
    def div(cls, a, b, dest=None):
        if dest is None:
            return PVector(a.x / b, a.y / b, a.z / b)
        dest.__vector.set(a.x / b, a.y / b, a.z / b)
        return dest

    @classmethod
    def dist(cls, a, b):
        return a.__vector.dist(b.__vector)

    @classmethod
    def dot(cls, a, b):
        return a.__vector.dot(b.__vector)

    def __add__(a, b):
        return PVector.add(a, b, None)

    def __sub__(a, b):
        return PVector.sub(a, b, None)

    def __isub__(a, b):
        a.sub(b)
        return a

    def __iadd__(a, b):
        a.add(b)
        return a

    def __mul__(a, b):
        if not isinstance(b, Number):
            raise TypeError(
                "The * operator can only be used to multiply a PVector by a number")
        return PVector.mult(a, float(b), None)

    def __rmul__(a, b):
        if not isinstance(b, Number):
            raise TypeError(
                "The * operator can only be used to multiply a PVector by a number")
        return PVector.mult(a, float(b), None)

    def __imul__(a, b):
        if not isinstance(b, Number):
            raise TypeError(
                "The *= operator can only be used to multiply a PVector by a number")
        a.__vector.mult(float(b))
        return a

    def __truediv__(a, b):
        if not isinstance(b, Number):
            raise TypeError(
                "The * operator can only be used to multiply a PVector by a number")
        return PVector(a.x / float(b), a.y / float(b), a.z / float(b))

    def __itruediv__(a, b):
        if not isinstance(b, Number):
            raise TypeError(
                "The /= operator can only be used to multiply a PVector by a number")
        a.__vector.set(a.x / float(b), a.y / float(b), a.z / float(b))
        return a

    def __eq__(a, b):
        return a.x == b[0] and a.y == b[1] and a.z == b[2]

    def __lt__(a, b):
        return a.magSq() < b.magSq()

    def __le__(a, b):
        return a.magSq() <= b.magSq()

    def __gt__(a, b):
        return a.magSq() > b.magSq()

    def __ge__(a, b):
        return a.magSq() >= b.magSq()

    # Problematic class methods, we would rather use p5.Vector when possible...

    @classmethod
    def lerp(cls, a, b, f, dest=None):
        v = createVector(a.x, a.y, a.z)
        v.lerp(b.__vector, f)
        if dest is None:
            return PVector(v.x, v.y, v.z)
        dest.set(v.x, v.y, v.z)
        return dest

    @classmethod
    def cross(cls, a, b, dest=None):
        x = a.y * b[2] - b[1] * a.z
        y = a.z * b[0] - b[2] * a.x
        z = a.x * b[1] - b[0] * a.y
        if dest is None:
            return PVector(x, y, z)
        dest.set(x, y, z)
        return dest

    @classmethod
    def fromAngle(cls, angle, length=1):
        # https://github.com/processing/p5.js/blob/3f0b2f0fe575dc81c724474154f5b23a517b7233/src/math/p5.Vector.js
        return PVector(length * cos(angle), length * sin(angle), 0)

    @classmethod
    def fromAngles(theta, phi, length=1):
        # https://github.com/processing/p5.js/blob/3f0b2f0fe575dc81c724474154f5b23a517b7233/src/math/p5.Vector.js
        cosPhi = cos(phi)
        sinPhi = sin(phi)
        cosTheta = cos(theta)
        sinTheta = sin(theta)
        return PVector(length * sinTheta * sinPhi,
                       -length * cosTheta,
                       length * sinTheta * cosPhi)

    @classmethod
    def random2D(cls):
        return PVector.fromAngle(random(TWO_PI))

    @classmethod
    def random3D(cls, dest=None):
        angle = random(TWO_PI)
        vz = random(2) - 1
        mult = sqrt(1 - vz * vz)
        vx = mult * cos(angle)
        vy = mult * sin(angle)
        if dest is None:
            return PVector(vx, vy, vz)
        dest.set(vx, vy, vz)
        return dest

    @classmethod
    def angleBetween(cls, a, b):
        return acos(a.dot(b) / sqrt(a.magSq() * b.magSq()))

    # Other harmless p5js methods

    def equals(self, v):
        return self == v

    def heading2D(self):
        return self.__vector.heading()

    def reflect(self, *args):
        # Reflect the incoming vector about a normal to a line in 2D, or about
        # a normal to a plane in 3D This method acts on the vector directly
        r = self.__vector.reflect(*args)
        return r

    def array(self):
        # Return a representation of this vector as a float array. This is only
        # for temporary use. If used in any w fashion, the contents should be
        # copied by using the p5.Vector.copy() method to copy into your own
        # array.
        return self.__vector.array()

    def toString(self):
        # Returns a string representation of a vector v by calling String(v) or v.toString().
        # return self.__vector.toString() would be something like "p5.vector
        # Object […, …, …]"
        return str(self)

    def rem(self, *args):
        # Gives remainder of a vector when it is divided by anw vector. See
        # examples for more context.
        self.__vector.rem(*args)
        return self


def pre_draw(p5_instance, draw_func, *args, **kwargs):
    """
    We need to run this before the actual draw to insert and update p5 env variables
    """
    global _CTX_MIDDLE, _DEFAULT_FILL, _DEFAULT_LEADMULT, _DEFAULT_STROKE, _DEFAULT_TEXT_FILL

    global ADD, ALT, ARROW, AUTO, AUDIO, AXES, BACKSPACE, BASELINE, BEVEL, BEZIER, BLEND, BLUR, BOLD, BOLDITALIC
    global BOTTOM, BURN, CENTER, CHORD, CLAMP, CLOSE, CONTROL, CORNER, CORNERS, CROSS, CURVE, DARKEST
    global DEG_TO_RAD, DEGREES, DELETE, DIFFERENCE, DILATE, DODGE, DOWN_ARROW, ENTER, ERODE, ESCAPE, EXCLUSION
    global FILL, GRAY, GRID, HALF_PI, HAND, HARD_LIGHT, HSB, HSL, IMAGE, IMMEDIATE, INVERT, ITALIC, LANDSCAPE
    global LEFT, LEFT_ARROW, LIGHTEST, LINE_LOOP, LINE_STRIP, LINEAR, LINES, MIRROR, MITER, MOVE, MULTIPLY, NEAREST
    global NORMAL, OPAQUE, OPEN, OPTION, OVERLAY, P2D, P3D, PI, PIE, POINTS, PORTRAIT, POSTERIZE, PROJECT, QUAD_STRIP
    global QUADRATIC, QUADS, QUARTER_PI, RAD_TO_DEG, RADIANS, RADIUS, REPEAT, REPLACE, RETURN, RGB, RIGHT, RIGHT_ARROW
    global ROUND, SCREEN, SHIFT, SOFT_LIGHT, SQUARE, STROKE, SUBTRACT, TAB, TAU, TEXT, TEXTURE, THRESHOLD, TOP
    global TRIANGLE_FAN, TRIANGLE_STRIP, TRIANGLES, TWO_PI, UP_ARROW, VIDEO, WAIT, WEBGL

    global frameCount, focused, displayWidth, displayHeight, windowWidth, windowHeight, width, height
    global deviceOrientation, accelerationX, accelerationY, accelerationZ
    global pAccelerationX, pAccelerationY, pAccelerationZ, rotationX, rotationY, rotationZ
    global pRotationX, pRotationY, pRotationZ, turnAxis, keyIsPressed, key, keyCode, mouseX, mouseY, pmouseX, pmouseY
    global winMouseX, winMouseY, pwinMouseX, pwinMouseY, mouseButton, mouseIsPressed, touches, pixels

    _CTX_MIDDLE = p5_instance._CTX_MIDDLE
    _DEFAULT_FILL = p5_instance._DEFAULT_FILL
    _DEFAULT_LEADMULT = p5_instance._DEFAULT_LEADMULT
    _DEFAULT_STROKE = p5_instance._DEFAULT_STROKE
    _DEFAULT_TEXT_FILL = p5_instance._DEFAULT_TEXT_FILL

    ADD = p5_instance.ADD
    ALT = p5_instance.ALT
    ARROW = p5_instance.ARROW
    AUDIO = p5_instance.AUDIO
    AUTO = p5_instance.AUTO
    AXES = p5_instance.AXES
    BACKSPACE = p5_instance.BACKSPACE
    BASELINE = p5_instance.BASELINE
    BEVEL = p5_instance.BEVEL
    BEZIER = p5_instance.BEZIER
    BLEND = p5_instance.BLEND
    BLUR = p5_instance.BLUR
    BOLD = p5_instance.BOLD
    BOLDITALIC = p5_instance.BOLDITALIC
    BOTTOM = p5_instance.BOTTOM
    BURN = p5_instance.BURN
    CENTER = p5_instance.CENTER
    CHORD = p5_instance.CHORD
    CLAMP = p5_instance.CLAMP
    CLOSE = p5_instance.CLOSE
    CONTROL = p5_instance.CONTROL
    CORNER = p5_instance.CORNER
    CORNERS = p5_instance.CORNERS
    CROSS = p5_instance.CROSS
    CURVE = p5_instance.CURVE
    DARKEST = p5_instance.DARKEST
    DEG_TO_RAD = p5_instance.DEG_TO_RAD
    DEGREES = p5_instance.DEGREES
    DELETE = p5_instance.DELETE
    DIFFERENCE = p5_instance.DIFFERENCE
    DILATE = p5_instance.DILATE
    DODGE = p5_instance.DODGE
    DOWN_ARROW = p5_instance.DOWN_ARROW
    ENTER = p5_instance.ENTER
    ERODE = p5_instance.ERODE
    ESCAPE = p5_instance.ESCAPE
    EXCLUSION = p5_instance.EXCLUSION
    FILL = p5_instance.FILL
    GRAY = p5_instance.GRAY
    GRID = p5_instance.GRID
    HALF_PI = p5_instance.HALF_PI
    HAND = p5_instance.HAND
    HARD_LIGHT = p5_instance.HARD_LIGHT
    HSB = p5_instance.HSB
    HSL = p5_instance.HSL
    IMAGE = p5_instance.IMAGE
    IMMEDIATE = p5_instance.IMMEDIATE
    INVERT = p5_instance.INVERT
    ITALIC = p5_instance.ITALIC
    LANDSCAPE = p5_instance.LANDSCAPE
    LEFT = p5_instance.LEFT
    LEFT_ARROW = p5_instance.LEFT_ARROW
    LIGHTEST = p5_instance.LIGHTEST
    LINE_LOOP = p5_instance.LINE_LOOP
    LINE_STRIP = p5_instance.LINE_STRIP
    LINEAR = p5_instance.LINEAR
    LINES = p5_instance.LINES
    MIRROR = p5_instance.MIRROR
    MITER = p5_instance.MITER
    MOVE = p5_instance.MOVE
    MULTIPLY = p5_instance.MULTIPLY
    NEAREST = p5_instance.NEAREST
    NORMAL = p5_instance.NORMAL
    OPAQUE = p5_instance.OPAQUE
    OPEN = p5_instance.OPEN
    OPTION = p5_instance.OPTION
    OVERLAY = p5_instance.OVERLAY
    P2D = p5_instance.P2D
    P3D = p5_instance.WEBGL
    PI = p5_instance.PI
    PIE = p5_instance.PIE
    POINTS = p5_instance.POINTS
    PORTRAIT = p5_instance.PORTRAIT
    POSTERIZE = p5_instance.POSTERIZE
    PROJECT = p5_instance.PROJECT
    QUAD_STRIP = p5_instance.QUAD_STRIP
    QUADRATIC = p5_instance.QUADRATIC
    QUADS = p5_instance.QUADS
    QUARTER_PI = p5_instance.QUARTER_PI
    RAD_TO_DEG = p5_instance.RAD_TO_DEG
    RADIANS = p5_instance.RADIANS
    RADIUS = p5_instance.RADIUS
    REPEAT = p5_instance.REPEAT
    REPLACE = p5_instance.REPLACE
    RETURN = p5_instance.RETURN
    RGB = p5_instance.RGB
    RIGHT = p5_instance.RIGHT
    RIGHT_ARROW = p5_instance.RIGHT_ARROW
    ROUND = p5_instance.ROUND
    SCREEN = p5_instance.SCREEN
    SHIFT = p5_instance.SHIFT
    SOFT_LIGHT = p5_instance.SOFT_LIGHT
    SQUARE = p5_instance.SQUARE
    STROKE = p5_instance.STROKE
    SUBTRACT = p5_instance.SUBTRACT
    TAB = p5_instance.TAB
    TAU = p5_instance.TAU
    TEXT = p5_instance.TEXT
    TEXTURE = p5_instance.TEXTURE
    THRESHOLD = p5_instance.THRESHOLD
    TOP = p5_instance.TOP
    TRIANGLE_FAN = p5_instance.TRIANGLE_FAN
    TRIANGLE_STRIP = p5_instance.TRIANGLE_STRIP
    TRIANGLES = p5_instance.TRIANGLES
    TWO_PI = p5_instance.TWO_PI
    UP_ARROW = p5_instance.UP_ARROW
    VIDEO = p5_instance.VIDEO
    WAIT = p5_instance.WAIT
    WEBGL = p5_instance.WEBGL

    frameCount = p5_instance.frameCount
    focused = p5_instance.focused
    displayWidth = p5_instance.displayWidth
    displayHeight = p5_instance.displayHeight
    windowWidth = p5_instance.windowWidth
    windowHeight = p5_instance.windowHeight
    width = p5_instance.width
    height = p5_instance.height
    deviceOrientation = p5_instance.deviceOrientation
    accelerationX = p5_instance.accelerationX
    accelerationY = p5_instance.accelerationY
    accelerationZ = p5_instance.accelerationZ
    pAccelerationX = p5_instance.pAccelerationX
    pAccelerationY = p5_instance.pAccelerationY
    pAccelerationZ = p5_instance.pAccelerationZ
    rotationX = p5_instance.rotationX
    rotationY = p5_instance.rotationY
    rotationZ = p5_instance.rotationZ
    pRotationX = p5_instance.pRotationX
    pRotationY = p5_instance.pRotationY
    pRotationZ = p5_instance.pRotationZ
    turnAxis = p5_instance.turnAxis
    keyIsPressed = p5_instance.keyIsPressed
    key = p5_instance.key
    keyCode = p5_instance.keyCode
    mouseX = p5_instance.mouseX
    mouseY = p5_instance.mouseY
    pmouseX = p5_instance.pmouseX
    pmouseY = p5_instance.pmouseY
    winMouseX = p5_instance.winMouseX
    winMouseY = p5_instance.winMouseY
    pwinMouseX = p5_instance.pwinMouseX
    pwinMouseY = p5_instance.pwinMouseY
    mouseButton = p5_instance.mouseButton
    mouseIsPressed = p5_instance.mouseIsPressed
    touches = p5_instance.touches
    pixels = p5_instance.pixels

    return draw_func(*args, **kwargs)


def global_p5_injection(p5_sketch):
    """
    Injects the p5js's skecth instance as a global variable to setup and draw functions
    """

    def decorator(f, *args, **kwargs):
        def wrapper(*args, **kwargs):
            global _P5_INSTANCE
            _P5_INSTANCE = p5_sketch
            return pre_draw(_P5_INSTANCE, f, *args, **kwargs)


        return wrapper


    return decorator


def start_p5(preload_func, setup_func, draw_func, event_functions):
    """
    This is the entrypoint function. It accepts 2 parameters:

    - preload_func: A Python preload callable
    - setup_func: a Python setup callable
    - draw_func: a Python draw callable
    - event_functions: a config dict for the event functions in the format:
                       {"eventFunctionName": python_event_function}

    This method gets the p5js's sketch instance and injects them
    """

    def sketch_setup(p5_sketch):
        """
        Callback function called to configure new p5 instance
        """
        p5_sketch.preload = global_p5_injection(p5_sketch)(preload_func)
        p5_sketch.setup = global_p5_injection(p5_sketch)(setup_func)
        p5_sketch.draw = global_p5_injection(p5_sketch)(draw_func)


    window.instance = p5.new(sketch_setup, 'sketch-holder')

    # Register event functions
    event_function_names = (
        "deviceMoved", "deviceTurned", "deviceShaken", "windowResized",
        "keyPressed", "keyReleased", "keyTyped",
        "mousePressed", "mouseReleased", "mouseClicked", "doubleClicked",
        "mouseMoved", "mouseDragged", "mouseWheel",
        "touchStarted", "touchMoved", "touchEnded", "keyIsDown",
    )
    for f_name in [f for f in event_function_names if event_functions.get(f, None)]:
        func = event_functions[f_name]
        event_func = global_p5_injection(window.instance)(func)
        setattr(window.instance, f_name, event_func)
`;

const placeholder = `
def preload():
    pass

def setup():
    pass

def draw():
    pass

deviceMoved = None
deviceTurned = None
deviceShaken = None
keyPressed = None
keyReleased = None
keyTyped = None
mouseMoved = None
mouseDragged = None
mousePressed = None
mouseReleased = None
mouseClicked = None
doubleClicked = None
mouseWheel = None
touchStarted = None
touchMoved = None
touchEnded = None
windowResized = None
`;

let userCode = `
print("This is indeed the new new new new new new new new version")

"""Random variable generators.
    bytes
    -----
           uniform bytes (values between 0 and 255)
    integers
    --------
           uniform within range
    sequences
    ---------
           pick random element
           pick random sample
           pick weighted random sample
           generate random permutation
    distributions on the real line:
    ------------------------------
           uniform
           triangular
           normal (Gaussian)
           lognormal
           negative exponential
           gamma
           beta
           pareto
           Weibull
    distributions on the circle (angles 0 to 2pi)
    ---------------------------------------------
           circular uniform
           von Mises
General notes on the underlying Mersenne Twister core generator:
* The period is 2**19937-1.
* It is one of the most extensively tested generators in existence.
* The random() method is implemented in C, executes in a single Python step,
  and is, therefore, threadsafe.
"""
# Translated by Guido van Rossum from C source provided by
# Adrian Baddeley.  Adapted by Raymond Hettinger for use with
# the Mersenne Twister  and os.urandom() core generators.
from warnings import warn as _warn
from math import log as _log, exp as _exp, pi as _pi, e as _e, ceil as _ceil
from math import sqrt as _sqrt, acos as _acos, cos as _cos, sin as _sin
from math import tau as TWOPI, floor as _floor, isfinite as _isfinite
from os import urandom as _urandom
from _collections_abc import Set as _Set, Sequence as _Sequence
from operator import index as _index
from itertools import accumulate as _accumulate, repeat as _repeat
from bisect import bisect as _bisect
import os as _os
import _random
try:
    # hashlib is pretty heavy to load, try lean internal module first
    from _sha512 import sha512 as _sha512
except ImportError:
    # fallback to official implementation
    from hashlib import sha512 as _sha512
__all__ = [
    "Random",
    "SystemRandom",
    "betavariate",
    "choice",
    "choices",
    "expovariate",
    "gammavariate",
    "gauss",
    "getrandbits",
    "getstate",
    "lognormvariate",
    "normalvariate",
    "paretovariate",
    "randbytes",
    "randint",
    "random",
    "randrange",
    "sample",
    "seed",
    "setstate",
    "shuffle",
    "triangular",
    "uniform",
    "vonmisesvariate",
    "weibullvariate",
]
NV_MAGICCONST = 4 * _exp(-0.5) / _sqrt(2.0)
LOG4 = _log(4.0)
SG_MAGICCONST = 1.0 + _log(4.5)
BPF = 53        # Number of bits in a float
RECIP_BPF = 2 ** -BPF
_ONE = 1
class Random(_random.Random):
    """Random number generator base class used by bound module functions.
    Used to instantiate instances of Random to get generators that don't
    share state.
    Class Random can also be subclassed if you want to use a different basic
    generator of your own devising: in that case, override the following
    methods:  random(), seed(), getstate(), and setstate().
    Optionally, implement a getrandbits() method so that randrange()
    can cover arbitrarily large ranges.
    """
    VERSION = 3     # used by getstate/setstate
    def __init__(self, x=None):
        """Initialize an instance.
        Optional argument x controls seeding, as for Random.seed().
        """
        self.seed(x)
        self.gauss_next = None
    def seed(self, a=None, version=2):
        """Initialize internal state from a seed.
        The only supported seed types are None, int, float,
        str, bytes, and bytearray.
        None or no argument seeds from current time or from an operating
        system specific randomness source if available.
        If *a* is an int, all bits are used.
        For version 2 (the default), all of the bits are used if *a* is a str,
        bytes, or bytearray.  For version 1 (provided for reproducing random
        sequences from older versions of Python), the algorithm for str and
        bytes generates a narrower range of seeds.
        """
        if version == 1 and isinstance(a, (str, bytes)):
            a = a.decode('latin-1') if isinstance(a, bytes) else a
            x = ord(a[0]) << 7 if a else 0
            for c in map(ord, a):
                x = ((1000003 * x) ^ c) & 0xFFFFFFFFFFFFFFFF
            x ^= len(a)
            a = -2 if x == -1 else x
        elif version == 2 and isinstance(a, (str, bytes, bytearray)):
            if isinstance(a, str):
                a = a.encode()
            a = int.from_bytes(a + _sha512(a).digest(), 'big')
        super().seed(a)
        self.gauss_next = None
    def getstate(self):
        """Return internal state; can be passed to setstate() later."""
        return self.VERSION, super().getstate(), self.gauss_next
    def setstate(self, state):
        """Restore internal state from object returned by getstate()."""
        version = state[0]
        if version == 3:
            version, internalstate, self.gauss_next = state
            super().setstate(internalstate)
        elif version == 2:
            version, internalstate, self.gauss_next = state
            # In version 2, the state was saved as signed ints, which causes
            #   inconsistencies between 32/64-bit systems. The state is
            #   really unsigned 32-bit ints, so we convert negative ints from
            #   version 2 to positive longs for version 3.
            try:
                internalstate = tuple(x % (2 ** 32) for x in internalstate)
            except ValueError as e:
                raise TypeError from e
            super().setstate(internalstate)
        else:
            raise ValueError("state with version %s passed to "
                             "Random.setstate() of version %s" %
                             (version, self.VERSION))
    ## -------------------------------------------------------
    ## ---- Methods below this point do not need to be overridden or extended
    ## ---- when subclassing for the purpose of using a different core generator.
    ## -------------------- pickle support  -------------------
    # Issue 17489: Since __reduce__ was defined to fix #759889 this is no
    # longer called; we leave it here because it has been here since random was
    # rewritten back in 2001 and why risk breaking something.
    def __getstate__(self):  # for pickle
        return self.getstate()
    def __setstate__(self, state):  # for pickle
        self.setstate(state)
    def __reduce__(self):
        return self.__class__, (), self.getstate()
    ## ---- internal support method for evenly distributed integers ----
    def __init_subclass__(cls, /, **kwargs):
        """Control how subclasses generate random integers.
        The algorithm a subclass can use depends on the random() and/or
        getrandbits() implementation available to it and determines
        whether it can generate random integers from arbitrarily large
        ranges.
        """
        for c in cls.__mro__:
            if '_randbelow' in c.__dict__:
                # just inherit it
                break
            if 'getrandbits' in c.__dict__:
                cls._randbelow = cls._randbelow_with_getrandbits
                break
            if 'random' in c.__dict__:
                cls._randbelow = cls._randbelow_without_getrandbits
                break
    def _randbelow_with_getrandbits(self, n):
        "Return a random int in the range [0,n).  Returns 0 if n==0."
        if not n:
            return 0
        getrandbits = self.getrandbits
        k = n.bit_length()  # don't use (n-1) here because n can be 1
        r = getrandbits(k)  # 0 <= r < 2**k
        while r >= n:
            r = getrandbits(k)
        return r
    def _randbelow_without_getrandbits(self, n, maxsize=1<<BPF):
        """Return a random int in the range [0,n).  Returns 0 if n==0.
        The implementation does not use getrandbits, but only random.
        """
        random = self.random
        if n >= maxsize:
            return _floor(random() * n)
        if n == 0:
            return 0
        rem = maxsize % n
        limit = (maxsize - rem) / maxsize   # int(limit * maxsize) % n == 0
        r = random()
        while r >= limit:
            r = random()
        return _floor(r * maxsize) % n
    _randbelow = _randbelow_with_getrandbits
    ## --------------------------------------------------------
    ## ---- Methods below this point generate custom distributions
    ## ---- based on the methods defined above.  They do not
    ## ---- directly touch the underlying generator and only
    ## ---- access randomness through the methods:  random(),
    ## ---- getrandbits(), or _randbelow().
    ## -------------------- bytes methods ---------------------
    def randbytes(self, n):
        """Generate n random bytes."""
        return self.getrandbits(n * 8).to_bytes(n, 'little')
    ## -------------------- integer methods  -------------------
    def randrange(self, start, stop=None, step=_ONE):
        """Choose a random item from range(start, stop[, step]).
        This fixes the problem with randint() which includes the
        endpoint; in Python this is usually not what you want.
        """
        # This code is a bit messy to make it fast for the
        # common case while still doing adequate error checking.
        try:
            istart = _index(start)
        except TypeError:
            istart = int(start)
            if istart != start:
                raise ValueError("non-integer arg 1 for randrange()")
        if stop is None:
            # We don't check for "step != 1" because it hasn't been
            # type checked and converted to an integer yet.
            if step is not _ONE:
                raise TypeError('Missing a non-None stop argument')
            if istart > 0:
                return self._randbelow(istart)
            raise ValueError("empty range for randrange()")
        # stop argument supplied.
        try:
            istop = _index(stop)
        except TypeError:
            istop = int(stop)
            if istop != stop:
                raise ValueError("non-integer stop for randrange()")
        width = istop - istart
        try:
            istep = _index(step)
        except TypeError:
            istep = int(step)
            if istep != step:
                raise ValueError("non-integer step for randrange()")
        # Fast path.
        if istep == 1:
            if width > 0:
                return istart + self._randbelow(width)
            raise ValueError("empty range for randrange() (%d, %d, %d)" % (istart, istop, width))
        # Non-unit step argument supplied.
        if istep > 0:
            n = (width + istep - 1) // istep
        elif istep < 0:
            n = (width + istep + 1) // istep
        else:
            raise ValueError("zero step for randrange()")
        if n <= 0:
            raise ValueError("empty range for randrange()")
        return istart + istep * self._randbelow(n)
    def randint(self, a, b):
        """Return random integer in range [a, b], including both end points.
        """
        return self.randrange(a, b+1)
    ## -------------------- sequence methods  -------------------
    def choice(self, seq):
        """Choose a random element from a non-empty sequence."""
        # raises IndexError if seq is empty
        return seq[self._randbelow(len(seq))]
    def shuffle(self, x, random=None):
        """Shuffle list x in place, and return None.
        Optional argument random is a 0-argument function returning a
        random float in [0.0, 1.0); if it is the default None, the
        standard random.random will be used.
        """
        if random is None:
            randbelow = self._randbelow
            for i in reversed(range(1, len(x))):
                # pick an element in x[:i+1] with which to exchange x[i]
                j = randbelow(i + 1)
                x[i], x[j] = x[j], x[i]
        else:
            floor = _floor
            for i in reversed(range(1, len(x))):
                # pick an element in x[:i+1] with which to exchange x[i]
                j = floor(random() * (i + 1))
                x[i], x[j] = x[j], x[i]
    def sample(self, population, k, *, counts=None):
        """Chooses k unique random elements from a population sequence or set.
        Returns a new list containing elements from the population while
        leaving the original population unchanged.  The resulting list is
        in selection order so that all sub-slices will also be valid random
        samples.  This allows raffle winners (the sample) to be partitioned
        into grand prize and second place winners (the subslices).
        Members of the population need not be hashable or unique.  If the
        population contains repeats, then each occurrence is a possible
        selection in the sample.
        Repeated elements can be specified one at a time or with the optional
        counts parameter.  For example:
            sample(['red', 'blue'], counts=[4, 2], k=5)
        is equivalent to:
            sample(['red', 'red', 'red', 'red', 'blue', 'blue'], k=5)
        To choose a sample from a range of integers, use range() for the
        population argument.  This is especially fast and space efficient
        for sampling from a large population:
            sample(range(10000000), 60)
        """
        # Sampling without replacement entails tracking either potential
        # selections (the pool) in a list or previous selections in a set.
        # When the number of selections is small compared to the
        # population, then tracking selections is efficient, requiring
        # only a small set and an occasional reselection.  For
        # a larger number of selections, the pool tracking method is
        # preferred since the list takes less space than the
        # set and it doesn't suffer from frequent reselections.
        # The number of calls to _randbelow() is kept at or near k, the
        # theoretical minimum.  This is important because running time
        # is dominated by _randbelow() and because it extracts the
        # least entropy from the underlying random number generators.
        # Memory requirements are kept to the smaller of a k-length
        # set or an n-length list.
        # There are other sampling algorithms that do not require
        # auxiliary memory, but they were rejected because they made
        # too many calls to _randbelow(), making them slower and
        # causing them to eat more entropy than necessary.
        if not isinstance(population, _Sequence):
            if isinstance(population, _Set):
                population = tuple(population)
            else:
                raise TypeError("Population must be a sequence.  For dicts or sets, use sorted(d).")
        n = len(population)
        if counts is not None:
            cum_counts = list(_accumulate(counts))
            if len(cum_counts) != n:
                raise ValueError('The number of counts does not match the population')
            total = cum_counts.pop()
            if not isinstance(total, int):
                raise TypeError('Counts must be integers')
            if total <= 0:
                raise ValueError('Total of counts must be greater than zero')
            selections = self.sample(range(total), k=k)
            bisect = _bisect
            return [population[bisect(cum_counts, s)] for s in selections]
        randbelow = self._randbelow
        if not 0 <= k <= n:
            raise ValueError("Sample larger than population or is negative")
        result = [None] * k
        setsize = 21        # size of a small set minus size of an empty list
        if k > 5:
            setsize += 4 ** _ceil(_log(k * 3, 4))  # table size for big sets
        if n <= setsize:
            # An n-length list is smaller than a k-length set.
            # Invariant:  non-selected at pool[0 : n-i]
            pool = list(population)
            for i in range(k):
                j = randbelow(n - i)
                result[i] = pool[j]
                pool[j] = pool[n - i - 1]  # move non-selected item into vacancy
        else:
            selected = set()
            selected_add = selected.add
            for i in range(k):
                j = randbelow(n)
                while j in selected:
                    j = randbelow(n)
                selected_add(j)
                result[i] = population[j]
        return result
    def choices(self, population, weights=None, *, cum_weights=None, k=1):
        """Return a k sized list of population elements chosen with replacement.
        If the relative weights or cumulative weights are not specified,
        the selections are made with equal probability.
        """
        random = self.random
        n = len(population)
        if cum_weights is None:
            if weights is None:
                floor = _floor
                n += 0.0    # convert to float for a small speed improvement
                return [population[floor(random() * n)] for i in _repeat(None, k)]
            try:
                cum_weights = list(_accumulate(weights))
            except TypeError:
                if not isinstance(weights, int):
                    raise
                k = weights
                raise TypeError(
                    f'The number of choices must be a keyword argument: {k=}'
                ) from None
        elif weights is not None:
            raise TypeError('Cannot specify both weights and cumulative weights')
        if len(cum_weights) != n:
            raise ValueError('The number of weights does not match the population')
        total = cum_weights[-1] + 0.0   # convert to float
        if total <= 0.0:
            raise ValueError('Total of weights must be greater than zero')
        if not _isfinite(total):
            raise ValueError('Total of weights must be finite')
        bisect = _bisect
        hi = n - 1
        return [population[bisect(cum_weights, random() * total, 0, hi)]
                for i in _repeat(None, k)]
    ## -------------------- real-valued distributions  -------------------
    def uniform(self, a, b):
        "Get a random number in the range [a, b) or [a, b] depending on rounding."
        return a + (b - a) * self.random()
    def triangular(self, low=0.0, high=1.0, mode=None):
        """Triangular distribution.
        Continuous distribution bounded by given lower and upper limits,
        and having a given mode value in-between.
        http://en.wikipedia.org/wiki/Triangular_distribution
        """
        u = self.random()
        try:
            c = 0.5 if mode is None else (mode - low) / (high - low)
        except ZeroDivisionError:
            return low
        if u > c:
            u = 1.0 - u
            c = 1.0 - c
            low, high = high, low
        return low + (high - low) * _sqrt(u * c)
    def normalvariate(self, mu, sigma):
        """Normal distribution.
        mu is the mean, and sigma is the standard deviation.
        """
        # Uses Kinderman and Monahan method. Reference: Kinderman,
        # A.J. and Monahan, J.F., "Computer generation of random
        # variables using the ratio of uniform deviates", ACM Trans
        # Math Software, 3, (1977), pp257-260.
        random = self.random
        while True:
            u1 = random()
            u2 = 1.0 - random()
            z = NV_MAGICCONST * (u1 - 0.5) / u2
            zz = z * z / 4.0
            if zz <= -_log(u2):
                break
        return mu + z * sigma
    def gauss(self, mu, sigma):
        """Gaussian distribution.
        mu is the mean, and sigma is the standard deviation.  This is
        slightly faster than the normalvariate() function.
        Not thread-safe without a lock around calls.
        """
        # When x and y are two variables from [0, 1), uniformly
        # distributed, then
        #
        #    cos(2*pi*x)*sqrt(-2*log(1-y))
        #    sin(2*pi*x)*sqrt(-2*log(1-y))
        #
        # are two *independent* variables with normal distribution
        # (mu = 0, sigma = 1).
        # (Lambert Meertens)
        # (corrected version; bug discovered by Mike Miller, fixed by LM)
        # Multithreading note: When two threads call this function
        # simultaneously, it is possible that they will receive the
        # same return value.  The window is very small though.  To
        # avoid this, you have to use a lock around all calls.  (I
        # didn't want to slow this down in the serial case by using a
        # lock here.)
        random = self.random
        z = self.gauss_next
        self.gauss_next = None
        if z is None:
            x2pi = random() * TWOPI
            g2rad = _sqrt(-2.0 * _log(1.0 - random()))
            z = _cos(x2pi) * g2rad
            self.gauss_next = _sin(x2pi) * g2rad
        return mu + z * sigma
    def lognormvariate(self, mu, sigma):
        """Log normal distribution.
        If you take the natural logarithm of this distribution, you'll get a
        normal distribution with mean mu and standard deviation sigma.
        mu can have any value, and sigma must be greater than zero.
        """
        return _exp(self.normalvariate(mu, sigma))
    def expovariate(self, lambd):
        """Exponential distribution.
        lambd is 1.0 divided by the desired mean.  It should be
        nonzero.  (The parameter would be called "lambda", but that is
        a reserved word in Python.)  Returned values range from 0 to
        positive infinity if lambd is positive, and from negative
        infinity to 0 if lambd is negative.
        """
        # lambd: rate lambd = 1/mean
        # ('lambda' is a Python reserved word)
        # we use 1-random() instead of random() to preclude the
        # possibility of taking the log of zero.
        return -_log(1.0 - self.random()) / lambd
    def vonmisesvariate(self, mu, kappa):
        """Circular data distribution.
        mu is the mean angle, expressed in radians between 0 and 2*pi, and
        kappa is the concentration parameter, which must be greater than or
        equal to zero.  If kappa is equal to zero, this distribution reduces
        to a uniform random angle over the range 0 to 2*pi.
        """
        # Based upon an algorithm published in: Fisher, N.I.,
        # "Statistical Analysis of Circular Data", Cambridge
        # University Press, 1993.
        # Thanks to Magnus Kessler for a correction to the
        # implementation of step 4.
        random = self.random
        if kappa <= 1e-6:
            return TWOPI * random()
        s = 0.5 / kappa
        r = s + _sqrt(1.0 + s * s)
        while True:
            u1 = random()
            z = _cos(_pi * u1)
            d = z / (r + z)
            u2 = random()
            if u2 < 1.0 - d * d or u2 <= (1.0 - d) * _exp(d):
                break
        q = 1.0 / r
        f = (q + z) / (1.0 + q * z)
        u3 = random()
        if u3 > 0.5:
            theta = (mu + _acos(f)) % TWOPI
        else:
            theta = (mu - _acos(f)) % TWOPI
        return theta
    def gammavariate(self, alpha, beta):
        """Gamma distribution.  Not the gamma function!
        Conditions on the parameters are alpha > 0 and beta > 0.
        The probability distribution function is:
                    x ** (alpha - 1) * math.exp(-x / beta)
          pdf(x) =  --------------------------------------
                      math.gamma(alpha) * beta ** alpha
        """
        # alpha > 0, beta > 0, mean is alpha*beta, variance is alpha*beta**2
        # Warning: a few older sources define the gamma distribution in terms
        # of alpha > -1.0
        if alpha <= 0.0 or beta <= 0.0:
            raise ValueError('gammavariate: alpha and beta must be > 0.0')
        random = self.random
        if alpha > 1.0:
            # Uses R.C.H. Cheng, "The generation of Gamma
            # variables with non-integral shape parameters",
            # Applied Statistics, (1977), 26, No. 1, p71-74
            ainv = _sqrt(2.0 * alpha - 1.0)
            bbb = alpha - LOG4
            ccc = alpha + ainv
            while True:
                u1 = random()
                if not 1e-7 < u1 < 0.9999999:
                    continue
                u2 = 1.0 - random()
                v = _log(u1 / (1.0 - u1)) / ainv
                x = alpha * _exp(v)
                z = u1 * u1 * u2
                r = bbb + ccc * v - x
                if r + SG_MAGICCONST - 4.5 * z >= 0.0 or r >= _log(z):
                    return x * beta
        elif alpha == 1.0:
            # expovariate(1/beta)
            return -_log(1.0 - random()) * beta
        else:
            # alpha is between 0 and 1 (exclusive)
            # Uses ALGORITHM GS of Statistical Computing - Kennedy & Gentle
            while True:
                u = random()
                b = (_e + alpha) / _e
                p = b * u
                if p <= 1.0:
                    x = p ** (1.0 / alpha)
                else:
                    x = -_log((b - p) / alpha)
                u1 = random()
                if p > 1.0:
                    if u1 <= x ** (alpha - 1.0):
                        break
                elif u1 <= _exp(-x):
                    break
            return x * beta
    def betavariate(self, alpha, beta):
        """Beta distribution.
        Conditions on the parameters are alpha > 0 and beta > 0.
        Returned values range between 0 and 1.
        """
        ## See
        ## http://mail.python.org/pipermail/python-bugs-list/2001-January/003752.html
        ## for Ivan Frohne's insightful analysis of why the original implementation:
        ##
        ##    def betavariate(self, alpha, beta):
        ##        # Discrete Event Simulation in C, pp 87-88.
        ##
        ##        y = self.expovariate(alpha)
        ##        z = self.expovariate(1.0/beta)
        ##        return z/(y+z)
        ##
        ## was dead wrong, and how it probably got that way.
        # This version due to Janne Sinkkonen, and matches all the std
        # texts (e.g., Knuth Vol 2 Ed 3 pg 134 "the beta distribution").
        y = self.gammavariate(alpha, 1.0)
        if y:
            return y / (y + self.gammavariate(beta, 1.0))
        return 0.0
    def paretovariate(self, alpha):
        """Pareto distribution.  alpha is the shape parameter."""
        # Jain, pg. 495
        u = 1.0 - self.random()
        return u ** (-1.0 / alpha)
    def weibullvariate(self, alpha, beta):
        """Weibull distribution.
        alpha is the scale parameter and beta is the shape parameter.
        """
        # Jain, pg. 499; bug fix courtesy Bill Arms
        u = 1.0 - self.random()
        return alpha * (-_log(u)) ** (1.0 / beta)
## ------------------------------------------------------------------
## --------------- Operating System Random Source  ------------------
class SystemRandom(Random):
    """Alternate random number generator using sources provided
    by the operating system (such as /dev/urandom on Unix or
    CryptGenRandom on Windows).
     Not available on all systems (see os.urandom() for details).
    """
    def random(self):
        """Get the next random number in the range [0.0, 1.0)."""
        return (int.from_bytes(_urandom(7), 'big') >> 3) * RECIP_BPF
    def getrandbits(self, k):
        """getrandbits(k) -> x.  Generates an int with k random bits."""
        if k < 0:
            raise ValueError('number of bits must be non-negative')
        numbytes = (k + 7) // 8                       # bits / 8 and rounded up
        x = int.from_bytes(_urandom(numbytes), 'big')
        return x >> (numbytes * 8 - k)                # trim excess bits
    def randbytes(self, n):
        """Generate n random bytes."""
        # os.urandom(n) fails with ValueError for n < 0
        # and returns an empty bytes string for n == 0.
        return _urandom(n)
    def seed(self, *args, **kwds):
        "Stub method.  Not used for a system random number generator."
        return None
    def _notimplemented(self, *args, **kwds):
        "Method should not be called for a system random number generator."
        raise NotImplementedError('System entropy source does not have state.')
    getstate = setstate = _notimplemented
# ----------------------------------------------------------------------
# Create one instance, seeded from current time, and export its methods
# as module-level functions.  The functions share state across all uses
# (both in the user's code and in the Python libraries), but that's fine
# for most programs and is easier for the casual user than making them
# instantiate their own Random() instance.
_inst = Random()
seed = _inst.seed
random = _inst.random
uniform = _inst.uniform
triangular = _inst.triangular
randint = _inst.randint
choice = _inst.choice
randrange = _inst.randrange
sample = _inst.sample
shuffle = _inst.shuffle
choices = _inst.choices
normalvariate = _inst.normalvariate
lognormvariate = _inst.lognormvariate
expovariate = _inst.expovariate
vonmisesvariate = _inst.vonmisesvariate
gammavariate = _inst.gammavariate
gauss = _inst.gauss
betavariate = _inst.betavariate
paretovariate = _inst.paretovariate
weibullvariate = _inst.weibullvariate
getstate = _inst.getstate
setstate = _inst.setstate
getrandbits = _inst.getrandbits
randbytes = _inst.randbytes
## ------------------------------------------------------
## ----------------- test program -----------------------
def _test_generator(n, func, args):
    from statistics import stdev, fmean as mean
    from time import perf_counter
    t0 = perf_counter()
    data = [func(*args) for i in _repeat(None, n)]
    t1 = perf_counter()
    xbar = mean(data)
    sigma = stdev(data, xbar)
    low = min(data)
    high = max(data)
def _test(N=2000):
    _test_generator(N, random, ())
    _test_generator(N, normalvariate, (0.0, 1.0))
    _test_generator(N, lognormvariate, (0.0, 1.0))
    _test_generator(N, vonmisesvariate, (0.0, 1.0))
    _test_generator(N, gammavariate, (0.01, 1.0))
    _test_generator(N, gammavariate, (0.1, 1.0))
    _test_generator(N, gammavariate, (0.1, 2.0))
    _test_generator(N, gammavariate, (0.5, 1.0))
    _test_generator(N, gammavariate, (0.9, 1.0))
    _test_generator(N, gammavariate, (1.0, 1.0))
    _test_generator(N, gammavariate, (2.0, 1.0))
    _test_generator(N, gammavariate, (20.0, 1.0))
    _test_generator(N, gammavariate, (200.0, 1.0))
    _test_generator(N, gauss, (0.0, 1.0))
    _test_generator(N, betavariate, (3.0, 3.0))
    _test_generator(N, triangular, (0.0, 1.0, 1.0 / 3.0))
## ------------------------------------------------------
## ------------------ fork support  ---------------------
if hasattr(_os, "fork"):
    _os.register_at_fork(after_in_child=_inst.seed)
if __name__ == '__main__':
    _test()

Random2 = Random()

class Question:
    def __init__(self, Question, Answers, Answer):
        self.Question = Question
        self.Answers = Answers
        self.AnswerRects = []
        self.Answer = Answer
        
    def ReorderAnswers(self):
        self.RemainingAnswers = []
        for i in range(0, len(self.Answers)):
            self.RemainingAnswers.append(self.Answers[i])
        self.ReorderedAnswers = []
        
        for i in range(0, len(self.Answers)):
            self.Random = Random2.randint(0, len(self.RemainingAnswers) - 1)
            self.CurrentQuestion = self.RemainingAnswers[self.Random]
            self.ReorderedAnswers.append(self.CurrentQuestion)
            self.RemainingAnswers.remove(self.CurrentQuestion)
            
    def CreateRects(self):
        self.Rows = int(sqrt(len(self.Answers)))
        self.Columns = int(len(self.Answers)/self.Rows)
        self.LastColumns = int(len(self.Answers) - (self.Columns * (self.Rows - 1)))
        
        #print("Rows: " + str(self.Rows) + " Columns: " + str(self.Columns) + " Last Columns: " + str(self.LastColumns))
        
        self.CurrentX = 220
        self.CurrentY = 90
        
        self.AnswerRects = []
        
        #int(700/self.Columns)
        
        print(1)

        for i in range(0, self.Rows):
            self.CurrentX = 220
            if(i < self.Rows - 1):
                for r in range(0, self.Columns):
                    self.AnswerRects.append([int(self.CurrentX), int(self.CurrentY), int(700/self.Columns), int(200/self.Rows)])
                    self.CurrentX += int(700/self.Columns)
            else:
                for r in range(0, self.LastColumns):
                    self.AnswerRects.append([int(self.CurrentX), int(self.CurrentY), int(700/self.LastColumns), int(200/self.Rows)])
                    self.CurrentX += int(700/self.LastColumns)
            
            self.CurrentY += int(200/self.Rows)
    def CheckAnswer(self):
        print(2)

        for i in range(0, len(self.AnswerRects)):
            if(mouseX >= self.AnswerRects[i][0] and mouseX <= self.AnswerRects[i][0] + self.AnswerRects[i][2] and
            mouseY >= self.AnswerRects[i][1] and mouseY <= self.AnswerRects[i][1] + self.AnswerRects[i][3]):
                if(self.ReorderedAnswers[i] == self.Answer):
                    return True
                else:
                    return False
                break
    
    def Display(self):
        global NewQuestion
        
        if(NewQuestion == True):
            self.ReorderAnswers()
            self.CreateRects()
            
        self.TextSize = int(float(700)/float(len(self.Question)/2))
        
        print(3)
        if(self.TextSize > 70):
            self.TextSize = 70
        
        self.TextSize = int(float(self.TextSize) * float(float(3)/float(4)))
        
        #rect(220, 20, 700, 270)
        rect(220, 20, 700, 70)
        fill(0)
        textSize(self.TextSize)
        textAlign(LEFT, CENTER)
        text(self.Question, 230, 45)
        textSize(12)
        fill(255)
        
        for i in range(0, len(self.AnswerRects)):
            global Delay
            
            if(Delay != None and Delay != "Placeholder"):
                if(self.ReorderedAnswers[i] == self.Answer):
                    fill(0,200,0)
                else:
                    fill(220,0,0)
            
            #fill(0,255,0)
            rect(self.AnswerRects[i][0], self.AnswerRects[i][1], self.AnswerRects[i][2], self.AnswerRects[i][3])
            fill(0)
            textAlign(CENTER)
            
            self.RectCenterX = self.AnswerRects[i][0] + int(self.AnswerRects[i][2]/2)
            self.RectCenterY = self.AnswerRects[i][1] + int(self.AnswerRects[i][3]/2)
            
            text(self.ReorderedAnswers[i], self.RectCenterX, self.RectCenterY)
            fill(255)
        
        #rect(220, 90, 350, 100)
        #rect(570, 190, 350, 100)

Host0 = None
Host1 = None
Host2 = None

#Questions = [Question("a, b, c, or d?", ["a", "b", "c", "d"], "c"), Question("a, b, c, d, or e?", ["a", "b", "c", "d", "e"], "e")]

Questions = None

Clicked = False

def ResetQuestions():
    global Questions
    
    Questions = [Question("What is the name of the first computer?", ["ERIC", "ENIAC", "BRAIN", "EMCEE"], "ENIAC"), 
                 Question("Which of the following is NOT a programming language?", ["Java", "Scratch", "Python", "Microsoft"], "Microsoft"), 
                 Question("Which computer device got its name because the cord looked like the tail of an animal?", ["Mouse", "Keyboard", "Monitor", "Speaker"], "Mouse"), 
                 Question("Which social media platform is the newest?", ["Twitter", "Myspace", "Instagram", "Facebook"], "Instagram"), 
                 Question("What letter is between Q and E on a computer keyboard?", ["A", "H", "W", "M"], "W"), 
                 Question("Who came up with the phrase 'computer bug'?", ["Paul Allen", "Grace Hopper", "Ada Lovelace", " The Government"], "Grace Hopper"), 
                 Question("What critter was the first computer 'bug'?", ["Ant", "Beatle", "Moth", "Fly"], "Moth"), 
                 Question("Who was the first computer programmer?", ["Ada Lovelace", "Alan Turring", "Sir Isaac Newton", "Benjamin Franklin"], "Ada Lovelace"), 
                 Question("What did Charles Babbage invent when he designed his analytical engine in 1833?", ["Cell Phone", "Typewriter", "Monitor", "Computer"], "Computer"), 
                 Question("What is the name of the IBM computer that beat Jeopardy champions?", ["Watson", "Ken", "Wendy", "Laura"], "Watson"), 
                 Question("What is the popular name for the small icons commonly used to describe emotions?", ["Emojis", "Emoticons", "Animojis", "Little Faces"], "Emojis"), 
                 Question("Were the companies Hewlett-Packard, Microsoft, and Apple all started in a garage?", ["Yes", "No"], "Yes"), 
                 Question("What does www stand for?", ["World War W", "Nothing", "Wide Website World", "World Wide Web"], "World Wide Web"), 
                 Question("Who co-founded Microsoft?", ["Bill Gates", "Mark Zuckerberg", "Grace Hopper", "Steve Jobs"], "Bill Gates"), 
                 Question("What part of a computer is the 'brain'?", ["Motherboard", "Fatherboard", "Mothership", "Transformer"], "Motherboard")]

#Question("", ["", "", "", ""], ""), 

ResetQuestions()
CurrentQuestion = Random2.randint(0, len(Questions) - 1)

NewQuestion = True

FrameRate = 60

QuestionsCorrect = 0

class Host:
    def __init__(self, Height, CurrentPose, Name):
        global Host0
        global Host1
        global Host2
        
        self.Poses = [Host0, Host1, Host2]
        self.DesiredHeight = Height
        self.CurrentPose = CurrentPose
        self.Name = Name
        self.TimeRemaining = 0
    
    def RenderPose(self, x, y):
        self.Height = self.Poses[self.CurrentPose].height
        self.Ratio = float(float(self.DesiredHeight)/float(self.Height))
        self.Width = int(self.Poses[self.CurrentPose].width * self.Ratio)
        
        if(self.TimeRemaining > 0):
            self.UpdateMove()
            image(self.Poses[self.CurrentPose], self.x, self.y, self.Width, self.DesiredHeight)
        else:
            image(self.Poses[self.CurrentPose], x, y, self.Width, self.DesiredHeight)
        
    def Move(self, x1, y1, x2, y2, Time):
        global FrameRate
        
        self.x = x1
        self.y = y1
        
        self.x1 = x1
        self.y1 = y1
        self.XDist = x2 - x1
        self.YDist = y2 - y1
        
        if(self.XDist != 0):
            self.Slope = float(float(self.YDist)/float(self.XDist))
        else:
            self.Slope = self.YDist
        
        self.XInterval = float(float(self.XDist)/float(Time * FrameRate))
        self.YInterval = float(float(self.YDist)/float(Time * FrameRate))
        
        print(self.YInterval)
        
        self.TimeRemaining = int(Time * FrameRate)
        
    def UpdateMove(self):
        self.x += self.XInterval
        if(self.XInterval != 0):
            self.y = int(self.Slope * self.x) - int(self.Slope * self.x1) + self.y1
        else:
            self.y += self.YInterval
        
        self.TimeRemaining -= 1

class DelayTimer():
    def __init__(self, Delay):
        global FrameRate
        
        self.Delay = float(Delay) * float(FrameRate)
    
    def Count(self):
        global Delay
        
        self.Delay -= 1
        #print(self.Delay)
        
        print(4)
        
        if(self.Delay <= 0):
            return True
        
Delay = "Placeholder"
HostTextDelay = DelayTimer(7)
HostTextStage = 0
        
def setup():
    global Host
    global Host0
    global Host1
    global Host2
    global FrameRate
    
    size(1000, 500)
    frameRate(FrameRate)
    
    Host0 = loadImage("Host0.png")
    Host1 = loadImage("Host1.png")
    Host2 = loadImage("Host2.png")
    
    Host = Host(200, 1, "C:/Users/rdavi/Downloads/Game_Show_2/Host0")
    Host.Move(-200, 350, 0, 300, 7)
    
    textAlign(LEFT, CENTER)

def draw():
    global Host
    global Questions
    global NewQuestion
    global CurrentQuestion
    global Delay
    global HostTextStage
    global HostTextDelay
    global QuestionsCorrect
    global Clicked
    
    background(255)
    
    print(5)

    if(Host.TimeRemaining > 0 or HostTextStage <= 2):
        Host.CurrentPose = 0
    else:
        if(HostTextDelay != None):
            Host.CurrentPose = 1
    
    Host.RenderPose(0, 300)
    
    print(6)

    if(Host.TimeRemaining <= 0):
        print(7)
        if(HostTextStage > 1):
            Questions[CurrentQuestion].Display()
        
        if(HostTextStage == 0 and HostTextDelay != None):
            fill(0)
            textAlign(LEFT, CENTER)
            textSize(20)
            text("Welcome to C:/Users/rdavi/Downloads/Game_Show_2/Game_Show_2.pyde!", 220, 320)
            text("My name is " + Host.Name + "!", 220, 350)
            fill(255)
            
            if(HostTextDelay.Count() == True):
                HostTextDelay = None
        
        if(HostTextStage == 1 and HostTextDelay != None):
            fill(0)
            textAlign(LEFT, CENTER)
            textSize(20)
            text("Shall we begin?", 220, 320)
            fill(255)
            
            if(HostTextDelay.Count() == True):
                HostTextDelay = None
        
        print(8)
        if(HostTextStage > 1):
            HostTextDelay = None
        
        print(9)
        if(HostTextDelay == None and HostTextStage <= 3):
            print(10)
            HostTextDelay = DelayTimer(6)
            HostTextStage += 1
    
    print(11)
    if(NewQuestion == True and HostTextStage > 2):
        NewQuestion = False
    
    print(12)
        
    #print(HostTextStage)
    
    if(Delay == None):
        global QuestionsCorrect
        
        NewQuestion = True
        Delay = "Placeholder"
        Host.CurrentPose = 1
        print(Questions[CurrentQuestion].Question)
        Questions.remove(Questions[CurrentQuestion])
        print(len(Questions))
        
        if(Questions == []):
            ResetQuestions()
            
            fill(0)
            textAlign(LEFT, CENTER)
            textSize(20)
            text("You got " + str(QuestionsCorrect) + " out of " + str(len(Questions)) + " correct!", 220, 320)
            frameRate(0)
            fill(255)
        
        CurrentQuestion = Random2.randint(0, len(Questions) - 1)
    else:
        if(Delay != None and Delay != "Placeholder"):
            if(Delay.Count() == True):
                Delay = None

    if(mouseIsPressed == True and Clicked == False):
        Clicked = True

        if(mouseButton == LEFT):
            AnswerCorrect = Questions[CurrentQuestion].CheckAnswer()
            
            if(AnswerCorrect != None):
                if(AnswerCorrect == True):
                    Host.CurrentPose = 0
                    QuestionsCorrect += 1
                else:
                    Host.CurrentPose = 2

                Delay = DelayTimer(2)

    if(mouseIsPressed == False and Clicked == True):
        Clicked = False
`;

const startCode = `
event_functions = {
    "deviceMoved": deviceMoved,
    "deviceTurned": deviceTurned,
    "deviceShaken": deviceShaken,
    "keyPressed": keyPressed,
    "keyReleased": keyReleased,
    "keyTyped": keyTyped,
    "mouseMoved": mouseMoved,
    "mouseDragged": mouseDragged,
    "mousePressed": mousePressed,
    "mouseReleased": mouseReleased,
    "mouseClicked": mouseClicked,
    "doubleClicked": doubleClicked,
    "mouseWheel": mouseWheel,
    "touchStarted": touchStarted,
    "touchMoved": touchMoved,
    "touchEnded": touchEnded,
    "windowResized": windowResized,
}

start_p5(preload, setup, draw, event_functions)
`;

function runCode() {
    let code = [
        placeholder,
        userCode,
        wrapperContent,
        startCode,
    ].join('\n');

    if (window.instance) {
      window.instance.canvas.remove();
    }

    console.log("Python execution output:");
    window.pyodide.runPython(code);
}


async function main() {
    const config = {
        indexURL : "https://cdn.jsdelivr.net/pyodide/v0.18.1/full/",
        fullStdLib: false,
    }
    window.pyodide = await loadPyodide(config);
    // Pyodide is now ready to use...
    console.log(window.pyodide.runPython(`
        import io, code, sys
        from js import p5, window, document
        print(sys.version)
  `));
   window.runSketchCode = (code) => {
      userCode = code;
      runCode();
    }

    runCode();
};

// async method
main();